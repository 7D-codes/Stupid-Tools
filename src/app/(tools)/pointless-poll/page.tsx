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
  "paint a self-portrait",
  "make a sandcastle",
  "dance the tango",
  "ride a pogo stick",
  "bake a cake",
  "do a magic trick",
  "tie a bow tie",
  "compose a symphony",
  "hunt for buried treasure",
  "write a novel",
  "perform a stand-up comedy routine",
  "take a selfie with a celebrity",
  "build a house of cards",
  "fly a kite",
  "play the bagpipes",
  "make balloon animals",
  "run a marathon",
  "catch a butterfly",
  "ride a roller coaster",
  "conduct an orchestra",
  "design a spaceship",
  "host a cooking show",
  "conduct a science experiment",
  "make a documentary",
  "interview an alien",
  "play chess with a robot",
  "invent a new language",
  "create a viral video",
  "write a screenplay",
  "find a four-leaf clover",
  "read a thousand-page book",
  "start a band",
  "pilot a helicopter",
  "cook a five-course meal",
  "throw a boomerang",
  "identify constellations",
  "climb Mount Everest",
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
  "inside a giant bubble",
  "while wearing clown shoes",
  "under a disco ball",
  "in a crowded elevator",
  "in the middle of a cornfield",
  "while singing opera",
  "on a trampoline",
  "during a thunderstorm",
  "in a spaceship",
  "with a parrot on your shoulder",
  "in the Sahara Desert",
  "while holding a cactus",
  "on top of a mountain",
  "in a haunted house",
  "while wearing a superhero cape",
  "in a submarine",
  "in a hot air balloon",
  "during a sandstorm",
  "inside a maze",
  "with a rubber chicken",
  "in a crowded marketplace",
  "inside a snow globe",
  "while wearing a scuba suit",
  "during a fireworks display",
  "in a deserted ghost town",
  "while being chased by a duck",
  "on a merry-go-round",
  "in a rainforest",
  "during a medieval jousting tournament",
  "in a parallel universe",
  "while playing an accordion",
  "inside a wind tunnel",
  "in a library's silent section",
  "while wearing a banana costume",
  "inside a giant shoe",
  "on a pirate ship",
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
