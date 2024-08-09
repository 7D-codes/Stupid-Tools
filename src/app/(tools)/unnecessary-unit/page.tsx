"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ruler } from "lucide-react";
import React, { useCallback, useState } from "react";
import { z } from "zod";

interface UnitDictionary {
  [key: string]: number;
}

const unnecessaryUnits: UnitDictionary = {
  bananas: 18,
  giraffes: 500,
  "football fields": 9144,
  elephants: 300,
  "grand pianos": 150,
  "blue whales": 3000,
  phones: 15,
  laptops: 34,
  "tennis courts": 2377,
  pencils: 19,
  "cars (sedans)": 450,
  "bottles of water": 21,
  "light bulbs": 11,
  bicycles: 175,
  toothbrushes: 19,
  "books (novels)": 21,
  "coffee mugs": 10,
  basketballs: 24,
  shoes: 25,
  "rubber ducks": 9,
  "golf clubs": 115,
  guitars: 100,
  "hockey sticks": 150,
  "dining tables": 150,
  refrigerators: 180,
  "washing machines": 85,
  umbrellas: 100,
  frisbees: 27,
  "soda cans": 12,
  "cereal boxes": 30,
  microwaves: 35,
  pillows: 50,
  toilets: 40,
  "ceiling fans": 120,
  "basketball hoops": 305,
  "rocking chairs": 90,
  "bean bags": 80,
  "vacuum cleaners": 120,
  skateboards: 80,
  ladders: 300,
  "shopping carts": 100,
};

const standardUnits: UnitDictionary = {
  cm: 1,
  m: 100,
  km: 100000,
  in: 2.54,
  ft: 30.48,
  yd: 91.44,
  mi: 160934,
};

const inputSchema = z.object({
  value: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(Number(val)), {
      message: "Please enter a valid number",
    }),
});

const convertToUnnecessaryUnit = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const cmValue = value * standardUnits[fromUnit];
  return cmValue / unnecessaryUnits[toUnit];
};

export default function UnnecessaryUnitConverter() {
  const [inputValue, setInputValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("m");
  const [toUnit, setToUnit] = useState<string>("bananas");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateConversion = useCallback(() => {
    const parseResult = inputSchema.safeParse({ value: inputValue });
    if (parseResult.success) {
      const value = parseFloat(inputValue);
      const convertedValue = convertToUnnecessaryUnit(value, fromUnit, toUnit);
      setResult(convertedValue);
      setError(null);
      setShowResult(true);
    } else {
      setError(parseResult.error.errors[0].message);
      setResult(null);
      setShowResult(false);
    }
  }, [inputValue, fromUnit, toUnit]);

  return (
    <div className="w-full min-w-full">
      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="h-6 w-6" />
            Unnecessary Unit Converter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              type="tel"
              placeholder="Enter value"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              className="flex-grow"
            />
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(standardUnits).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 mb-4">
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(unnecessaryUnits).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={calculateConversion} className="w-full">
            Convert
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
        <CardFooter>
          {showResult && result !== null && (
            <div className="w-full mt-4 p-4 bg-green-100 rounded-md">
              <p className="text-center text-lg font-semibold">
                That&apos;s approximately {result.toFixed(2)} {toUnit}! 🤪
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
