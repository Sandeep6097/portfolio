import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sandeep Choudhary | Web PHP Laravel Developer & Next.js/React Explorer",
  description:
    "Professional portfolio of Sandeep Choudhary, experienced PHP Web Developer skilled in Laravel, CodeIgniter, API integrations, and payment gateways, learning Next.js, React, and AI applications.",
  keywords: [
    "Sandeep Choudhary",
    "PHP Developer",
    "Laravel Developer",
    "Next.js Portfolio",
    "React Developer",
    "Web Developer Mumbai",
    "Jury Scoring System",
    "CCAvenue Integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
