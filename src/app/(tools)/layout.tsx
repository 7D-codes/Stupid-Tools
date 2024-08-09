import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";
import { getToolMetadata } from "../utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const metadata = getToolMetadata(`${pathname}`);
  return metadata;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center pb-20">
      <div className="w-full max-w-lg p-4 relative justify-center items-center h-[300px]">
        {children}
      </div>
    </div>
  );
}
