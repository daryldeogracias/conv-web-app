"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const Mode = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};
export default Mode;
