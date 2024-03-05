"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

export function ProgressContext({ children }: { children: ReactNode }) {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#22ce7e"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
