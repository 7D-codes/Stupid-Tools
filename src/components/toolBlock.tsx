import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

interface ToolMetadata {
  title: string;
  description: string;
}

interface Tool {
  name: string;
  description: string;
  // image: string;
  url: string;
  icon: string;
  // metadata: ToolMetadata;
}

interface StupidToolCardProps {
  tool: Tool;
}

const StupidToolCard: React.FC<StupidToolCardProps> = ({ tool }) => (
  <Card className="overflow-hidden text-left hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      {/* <Image
        src={tool.image}
        alt={tool.name}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      /> */}
      {/* <div className="absolute top-2 left-2 bg-white rounded-full p-1">
        <tool.icon className="h-6 w-6 text-primary" />
      </div> */}
    </div>
    <CardHeader className="p-2">
      <CardTitle className="text-lg gap-2 flex flex-row">
        {tool.name}
        <p className="text-xl">{tool.icon}</p>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-2 pt-0">
      <p className="text-sm text-gray-600">{tool.description}</p>
    </CardContent>
    <CardFooter className=" flex justify-between items-center">
      <Button variant="secondary" size="lg" asChild>
        <a href={tool.url}>Try it</a>
      </Button>
      <div className="flex space-x-2 ">
        <Button variant="ghost" size="icon">
          <Star color="#584941" />
        </Button>
        {/* <Button variant="ghost" size="icon">
          <ArrowUp color="#584941" />
        </Button> */}
      </div>
    </CardFooter>
  </Card>
);

export default StupidToolCard;
