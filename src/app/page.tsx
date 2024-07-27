import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { tools } from "./data";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 sm:p-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 text-gray-800">
          UselessTools
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Welcome to the home of delightfully useless web tools!
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <Card className="mb-8 sm:mb-12">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-semibold">
              About UselessTools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-700">
              UselessTools is your hub for quirky, fun, and utterly pointless
              web applications. Dive in and waste time in the most entertaining
              way possible!
            </p>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-800">
            Our Useless Wonders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={200}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center">
                  <a href={tool.url}>
                    <Button variant="outline" size="sm">
                      Try it
                    </Button>
                  </a>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Upvote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 sm:mt-16 text-center text-gray-600">
        <p>&copy; 2024 UselessTools. All rights pointlessly reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
