import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { IBM_Plex_Sans_Arabic as font } from "next/font/google";
import "./globals.css";

const fontused = font({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata() {
  return {
    title: "UselessTools",
    description:
      "Discover a collection of quirky and fun online tools like Coin Flipper, Virtual Pet Rock, Fortune Cookie Generator, Mood Ring Simulator, Random Compliment Generator, and the World’s Slowest Website. Explore and enjoy our useless tools!",
    keywords:
      "useless tools, quirky tools, fun online tools, Coin Flipper, Virtual Pet Rock, Fortune Cookie Generator, Mood Ring Simulator, Random Compliment Generator, World’s Slowest Website",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontused.className,
          "flex flex-col justify-between items-center min-h-screen "
        )}
      >
        <Navbar />
        <main className="flex justify-center items-center text-center w-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
