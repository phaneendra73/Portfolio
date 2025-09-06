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
  title: "Phaneendra Marri - Portfolio",
  description: "Portfolio of Phaneendra Marri U+2013 Full Stack Developer. Showcasing projects, skills, and contact information with a modern, responsive design.",
  keywords: ["Phaneendra Marri", "portfolio", "web development", "Next.js", "TypeScript", "React", "UI/UX", "frontend", "backend"],
  authors: [{ name: "Phaneendra Marri" }],
  openGraph: {
    title: "Phaneendra Marri - Portfolio",
    description: "Portfolio of Phaneendra Marri U+2013 Full Stack Developer. Modern web projects and contact info.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phaneendra Marri - Portfolio",
    description: "Portfolio of Phaneendra Marri U+2013 Full Stack Developer. Modern web projects and contact info.",
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
