"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen, Check, Copy } from "lucide-react";
import React, { useState } from "react";

const Overexplainer3000: React.FC = () => {
  const [input, setInput] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateExplanation = async () => {
    if (!input.trim()) {
      setError("Please enter a concept to explain.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/generate-explanation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: input.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate explanation");
      }

      const data = await response.json();
      setExplanation(data.explanation);
    } catch (error) {
      console.error("Failed to generate explanation:", error);
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(explanation).then(() => {
      setCopied(true);
      toast({
        description: "Explanation copied to clipboard!",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Overexplainer 3000
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Enter a simple concept"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-4"
        />
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {explanation && (
          <div className="mt-4 relative">
            <p className="text-sm pr-8">{explanation}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={generateExplanation}
          className="w-full"
          disabled={loading || !input.trim()}
        >
          {loading ? "Generating..." : "Generate Overexplanation"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Overexplainer3000;
