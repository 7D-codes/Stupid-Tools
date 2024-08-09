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
  metadataBase: new URL("https://stupid-tools.vercel.app"),
  title: "Stupid Tools",
  description:
    "Discover a collection of Stupid and fun online tools. Explore and enjoy our Stupid yet Useless tools!",
  keywords:
    "useless tools, quirky tools, fun online tools, I'm bored, Stupid Tools,",
  robots: "index, follow",
  openGraph: {
    title: "Stupid Tools",
    description: "Discover a collection of quirky and fun online tools",
    url: "https://stupid-tools.vercel.app",
    siteName: "Stupid Tools",
    images: [
      {
        url: "/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Stupid Tools Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stupid Tools",
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
