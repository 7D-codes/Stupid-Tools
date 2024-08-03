"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
    person_profiles: "always",
  });
}

interface CSPostHogProviderProps {
  children: React.ReactNode;
}

export function CSPostHogProvider({
  children,
}: CSPostHogProviderProps): JSX.Element {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
