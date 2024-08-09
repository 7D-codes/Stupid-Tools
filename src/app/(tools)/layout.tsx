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
    <div className="min-h-screen w-full flex items-center justify-center pb-28">
      <div className="w-full  max-w-lg relative px-4 h-[400px]">{children}</div>
    </div>
  );
}
