"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Array of nonsensical activities
const activities = [
  "eat a sandwich",
  "climb a ladder",
  "write a haiku",
  "solve a Rubik's cube",
  "learn to yodel",
  "knit a sweater",
  "juggle flaming torches",
  "speak Klingon",
  "do the Macarena",
  "recite the alphabet backwards",
  "balance a spoon on your nose",
  "moonwalk in slow motion",
  "whistle the national anthem",
  "fold a fitted sheet perfectly",
  "lick your elbow",
];

// Array of ridiculous conditions
const conditions = [
  "while standing on one foot",
  "underwater",
  "in zero gravity",
  "blindfolded",
  "during a solar eclipse",
  "while riding a unicycle",
  "in slow motion",
  "telepathically",
  "on a bed of nails",
  "in a room full of puppies",
  "while wearing oven mitts",
  "in a sumo wrestling suit",
  "on a tightrope",
  "in an igloo",
  "during a zombie apocalypse",
];

function generateOption() {
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  return `${activity} ${condition}`;
}

export default function PointlessPollCreator() {
  const [optionA, setOptionA] = useState<string>("");
  const [optionB, setOptionB] = useState<string>("");

  const generatePoll = () => {
    setOptionA(generateOption());
    setOptionB(generateOption());
  };

  return (
    <div className="relative h-[400px]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Pointless Would You Rather Poll Creator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={generatePoll} className="w-full mb-4">
            Generate Pointless Poll
          </Button>
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
