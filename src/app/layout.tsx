import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jotika-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jotika Das — Full Stack Developer",
    template: "%s | Jotika Das",
  },
  description:
    "Portfolio of Jotika Das — Full Stack Developer and CSE student at USTC, building responsive web applications with React, Next.js, TypeScript, and Tailwind CSS, with a growing focus on AI & machine learning.",
  keywords: [
    "Jotika Das",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "AI ML Enthusiast",
    "USTC",
    "Chattogram",
    "Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Jotika Das", url: "https://github.com/jotika-meaw" }],
  creator: "Jotika Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jotika Das — Portfolio",
    title: "Jotika Das — Full Stack Developer",
    description:
      "Full Stack Developer and CSE student at USTC building responsive web apps with React, Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jotika Das — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotika Das — Full Stack Developer",
    description:
      "Full Stack Developer and CSE student at USTC building responsive web apps with React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060b16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var theme=t==="light"?"light":"dark";var r=document.documentElement;r.classList.toggle("dark",theme==="dark");r.classList.toggle("light",theme==="light");r.style.colorScheme=theme;var m=document.querySelector('meta[name="theme-color"]');if(m){m.setAttribute("content",theme==="dark"?"#060b16":"#f4f7fc");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
