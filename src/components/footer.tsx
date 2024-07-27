import { TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex w-full h-16">
      <div>
        <a href="https://x.com/7D_codes">
          <Button variant="ghost" className="gap-2">
            <TwitterIcon />
            7D_codes
          </Button>
        </a>
      </div>
    </div>
  );
}
