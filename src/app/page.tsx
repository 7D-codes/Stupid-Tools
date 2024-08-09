import StupidToolCard from "@/components/toolBlock";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { tools } from "../lib";

const LandingPage = () => {
  // Randomly select a featured tool
  const randomTool = tools[Math.floor(Math.random() * tools.length)];

  return (
    <div className="min-h-screen text-foreground p-4 sm:p-8 relative">
      <div className="absolute inset-0 opacity0 -z-50 pointer-events-none" />

      <header className="text-center mb-12 mt-24 sm:mb-16">
        <div className="flex justify-between mb-8 text-muted-foreground"></div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-2 text-foreground">
          Stupid Tools
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
          I made this site to make some use of my own time by learning web dev
          more
        </p>
        <div className="mt-8 gap-2 flex justify-center space-x-4">
          <a href="https://github.com/7D-codes/Stupid-Tools">
            <Button variant="outline" className="flex gap-2">
              <GithubIcon width={20} />
              View Source
            </Button>
          </a>
          <a href="mailto:miuatoro.exe?subject=Stupid%20Tool%20Idea&body=so%20I%20have%20this%20idea...">
            <Button>Submit Idea</Button>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-foreground">
            Random Tool
          </h2>
          <StupidToolCard tool={randomTool} />
        </section>
        <section>
          <h2 className="text-2xl sm:text-4xl font-semibold mb-8 text-center text-foreground">
            Hopefully they are helpful 😸
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <StupidToolCard key={index} tool={tool} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 sm:mt-24 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Stupid Tools. or something like that idk.</p>
      </footer>
      {/* Side navigation */}
    </div>
  );
};

export default LandingPage;
