import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio - John Doe",
  description: "A creative and innovative portfolio showcasing modern web development, design, and digital experiences.",
  keywords: ["portfolio", "web development", "design", "creative", "Next.js", "TypeScript", "UI/UX"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "Creative Portfolio - John Doe",
    description: "Innovative web development and design portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Portfolio - John Doe",
    description: "Innovative web development and design portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
