"use client";

import { ThemeProvider, ThemeProviderProps } from "next-themes";
import React, { useEffect, useState } from "react";

const NextThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default NextThemeProvider;