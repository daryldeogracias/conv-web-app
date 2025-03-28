import "./globals.css";
import Navbar from "./components/Navbar";
import NextThemeProvider from "./next-theme.provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Megneta 8-in-1 Sleep Supplement 🙆‍♀️",
  description:
    "Fall asleep faster, stay asleep longer, and wake up refreshed with Megneta 8-in-1 Sleep Supplement. Powered by natural ingredients to support deep, restorative sleep—without grogginess. Try it tonight!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative max-w-[1200px] mx-auto">
            <Navbar />
            {children}
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
