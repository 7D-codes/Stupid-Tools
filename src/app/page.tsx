import StupidToolCard from "@/components/toolBlock";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { tools } from "../lib";

const LandingPage = () => {
  // Randomly select a featured tool
  const featuredTool = tools[Math.floor(Math.random() * tools.length)];

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
          <a href="https://github.com">
            <Button variant="outline" className="flex gap-2">
              <GithubIcon width={20} />
              View Source
            </Button>
          </a>
          <Button>Submit Idea</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-foreground">
            Featured Tool
          </h2>
          <StupidToolCard tool={featuredTool} />
        </section>
        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-foreground">
            Our Useless Wonders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <StupidToolCard key={index} tool={tool} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 sm:mt-24 text-center text-muted-foreground">
        <p>&copy; 2024 UselessTools. All rights pointlessly reserved.</p>
      </footer>
      {/* Side navigation */}
    </div>
  );
};

export default LandingPage;
