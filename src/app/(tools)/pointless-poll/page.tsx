"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function PointlessPollCreator() {
  const [optionA, setOptionA] = useState<string>("");
  const [optionB, setOptionB] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generatePoll = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tool: "pointlessPoll", theme }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate poll");
      }

      const data = await response.json();
      setOptionA(data.optionA);
      setOptionB(data.optionB);
    } catch (error) {
      console.error("Error generating poll:", error);
      setError("Failed to generate poll. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-w-full">
      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Pointless Would You Rather Poll Creator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter a theme (optional)"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="mb-4"
          />
          <Button
            onClick={generatePoll}
            className="w-full mb-4"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Pointless Poll"}
          </Button>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {optionA && optionB && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Would you rather...
              </h3>
              <div className="space-y-2">
                <p className="p-2 bg-gray-100 rounded">A) {optionA}</p>
                <p className="p-2 bg-gray-100 rounded">B) {optionB}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
