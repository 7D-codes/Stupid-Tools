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

const promptTemplates = {
  overexplainer: (
    input: string
  ) => `Explain "${input}" in an overly complicated way,
    using unnecessarily convoluted ideas.
    Keep it to a short yet winding sentence that's hard to follow but technically correct:`,
  pointlessPoll: (
    theme: string
  ) => `Generate two absurd "Would you rather" options related to the theme: "${theme}". 
    Each option should combine a random activity with a ridiculous condition. 
    Make them humorous and utterly pointless. 
    Format the response as a JSON object with keys "optionA" and "optionB".
    Do not include "Would you rather" in the options.`,
};

export async function POST(req: NextRequest) {
  const ip = req.ip || "unknown";
  const isAllowed = rateLimit(ip, 10, 60 * 1000); // 10 requests a min

  if (!isAllowed) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const { tool, input, theme } = await req.json();
  if (!tool || !promptTemplates[tool as keyof typeof promptTemplates]) {
    return NextResponse.json(
      { error: "Invalid tool specified" },
      { status: 400 }
    );
  }

  try {
    const promptTemplate =
      promptTemplates[tool as keyof typeof promptTemplates];
    const prompt =
      typeof promptTemplate === "function"
        ? promptTemplate(tool === "overexplainer" ? input : theme)
        : promptTemplate;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content?.trim();
    if (content) {
      if (tool === "pointlessPoll") {
        try {
          const parsedContent = JSON.parse(content);
          // Remove "Would you rather" prefix if present
          parsedContent.optionA = parsedContent.optionA.replace(
            /^Would you rather /i,
            ""
          );
          parsedContent.optionB = parsedContent.optionB.replace(
            /^Would you rather /i,
            ""
          );
          return NextResponse.json(parsedContent);
        } catch (error) {
          console.error("Failed to parse JSON response:", error);
          return NextResponse.json(
            { error: "Invalid response format" },
            { status: 500 }
          );
        }
      }
      return NextResponse.json({ content });
    } else {
      throw new Error("No content generated");
    }
  } catch (error) {
    console.error("Failed to generate content:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
