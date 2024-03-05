"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProgressContext: FC<Props> = ({ children }) => {
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
};
