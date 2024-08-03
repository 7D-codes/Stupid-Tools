"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Banana } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { z } from "zod";

const BANANA_LENGTH_CM = 17; // Average banana length cm I guess

const convertToBananas = (value: number, unit: string): number => {
  let cmValue = value;
  switch (unit) {
    case "cm":
      break;
    case "m":
      cmValue = value * 100;
      break;
    case "km":
      cmValue = value * 100000;
      break;
    case "in":
      cmValue = value * 2.54;
      break;
    case "ft":
      cmValue = value * 30.48;
      break;
    case "yd":
      cmValue = value * 91.44;
      break;
    case "mi":
      cmValue = value * 160934;
      break;
    default:
      return 0;
  }
  return cmValue / BANANA_LENGTH_CM;
};

const inputSchema = z.object({
  value: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(Number(val)), {
      message: "Please enter a valid number",
    }),
});

export default function BananaMetricPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputUnit, setInputUnit] = useState<string>("m");
  const [bananas, setBananas] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateBananas = useCallback(() => {
    const result = inputSchema.safeParse({ value: inputValue });
    if (result.success) {
      const value = parseFloat(inputValue);
      const bananaCount = convertToBananas(value, inputUnit);
      setBananas(bananaCount);
      setError(null);
      setShowResult(true);
    } else {
      setError(result.error.errors[0].message);
      setBananas(null);
      setShowResult(false);
    }
  }, [inputValue, inputUnit]);

  useEffect(() => {
    calculateBananas();
  }, [calculateBananas]);

  return (
    <div className="relative h-[300px]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Banana className="h-6 w-6" />
            Banana Metric Converter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Enter distance"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              className="flex-grow"
            />
            <Select value={inputUnit} onValueChange={setInputUnit}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cm">cm</SelectItem>
                <SelectItem value="m">m</SelectItem>
                <SelectItem value="km">km</SelectItem>
                <SelectItem value="in">in</SelectItem>
                <SelectItem value="ft">ft</SelectItem>
                <SelectItem value="yd">yd</SelectItem>
                <SelectItem value="mi">mi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={calculateBananas} className="w-full">
            Calculate
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>
      {showResult && bananas !== null && (
        <div className="absolute bottom-0 left-0 right-0 mt-4 p-4 bg-green-100 rounded-md">
          <p className="text-center text-lg font-semibold">
            Thats approximately {bananas.toFixed(2)} bananas long! 🍌
          </p>
        </div>
      )}
    </div>
  );
}
