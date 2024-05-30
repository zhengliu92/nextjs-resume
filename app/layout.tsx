import type { Metadata } from "next";
import "./globals.css";

import {
  Albert_Sans,
  Inter as FontSans,
  JetBrains_Mono,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const albert = Albert_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-albert",
});

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume",
  icons: [
    {
      url: "/icon.png",
      href: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-slate-50 dark:bg-slate-900 transition-colors duration-300",
          fontSans.variable,
          albert.variable,
          jetBrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='container'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
