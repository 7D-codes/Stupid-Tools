import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Space_Grotesk as font } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const fontused = font({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UselessTools",
  description:
    "Discover a collection of quirky and fun online tools like Coin Flipper, Virtual Pet Rock, Fortune Cookie Generator, Mood Ring Simulator, Random Compliment Generator, and the World's Slowest Website. Explore and enjoy our useless tools!",
  keywords:
    "useless tools, quirky tools, fun online tools, Coin Flipper, Virtual Pet Rock, Fortune Cookie Generator, Mood Ring Simulator, Random Compliment Generator, World's Slowest Website",
  robots: "index, follow",
  openGraph: {
    title: "UselessTools",
    description: "Discover a collection of quirky and fun online tools",
    url: "https://stupid-tools.vercel.app",
    siteName: "UselessTools",
    images: [
      {
        url: "/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "UselessTools Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UselessTools",
    description: "Discover a collection of quirky and fun online tools",
    images: ["/homepage.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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
          "flex flex-col select-none justify-between items-center min-h-screen "
        )}
      >
        <Navbar />
        <main className="flex justify-center items-center text-center w-screen">
          <CSPostHogProvider>
            {" "}
            {children}
            <SpeedInsights />
          </CSPostHogProvider>
        </main>
      </body>
    </html>
  );
}
