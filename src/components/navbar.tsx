"use client";
import { ArrowLeft, PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex w-full h-16">
      <div className="flex w-full px-10 py-2 justify-between">
        <a href="/">
          <Button variant="ghost" className="gap-2">
            {isHomePage ? (
              "Hello World"
            ) : (
              <>
                <ArrowLeft />
                Back
              </>
            )}
          </Button>
        </a>
        <a>
          <Button variant="outline" className="gap-2">
            <PlusIcon /> Submit Your Idea
          </Button>
        </a>
      </div>
    </div>
  );
}
