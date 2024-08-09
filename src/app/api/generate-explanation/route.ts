import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

function rateLimit(ip: string, limit: number, timeWindow: number): boolean {
  const now = Date.now();
  const windowStart = now - timeWindow;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  const record = rateLimitStore.get(ip)!;
  if (record.timestamp < windowStart) {
    record.count = 1;
    record.timestamp = now;
    return true;
  }

  record.count++;
  if (record.count > limit) {
    return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.ip || "unknown";
  const isAllowed = rateLimit(ip, 10, 60 * 1000); // 10 requests a min

  if (!isAllowed) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const { input } = await req.json();
  if (!input || typeof input !== "string" || input.length > 100) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const prompt = `Explain "${input}" in an overly complicated way,
    using unnecessarily convoluted ideas.
    Keep it to a short yet winding sentence that's hard to follow but technically correct:`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const explanation = completion.choices[0]?.message?.content?.trim();
    if (explanation) {
      return NextResponse.json({ explanation });
    } else {
      throw new Error("No explanation generated");
    }
  } catch (error) {
    console.error("Failed to generate explanation:", error);
    return NextResponse.json(
      { error: "Failed to generate explanation" },
      { status: 500 }
    );
  }
}
