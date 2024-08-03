import { Metadata } from "next";
import { getToolMetadata } from "../utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getToolMetadata("/banana-metric");
  return metadata;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center pb-20">
      <div className="w-full max-w-lg p-4 ">{children}</div>
    </div>
  );
}
