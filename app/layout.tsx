import "./globals.css";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
