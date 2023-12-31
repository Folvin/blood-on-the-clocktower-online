import type {Metadata} from "next";
import {MedievalSharp} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {cn} from "@/lib/utils";
import "react-loading-skeleton/dist/skeleton.css";
import {ReduxProvider} from "@/redux/provider";
import {DarkModeToggle, ThemeProvider} from "@/components/ThemeProvider";
import {FontProvider} from "@/components/FontProvider";

const medieval = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-medieval",
});

const unlovable = localFont({
  src: "./LHF-Unlovable.ttf",
  variable: "--font-unlovable",
});

export const metadata: Metadata = {
  title: "BOTC online",
  description: "app to play Blood On The Clocktower Online",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={cn("antialiased", "font-serif", medieval.variable, unlovable.variable)}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <DarkModeToggle />
            <FontProvider>
              <div className="p-2 pt-6 min-h-screen flex flex-col transform-gpu">{children}</div>
            </FontProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
