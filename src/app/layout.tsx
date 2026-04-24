import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";

// fonts
import { Figtree, JetBrains_Mono, Gaegu } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
  display: "swap",
});

// metadata

export const metadata: Metadata = {
  title: "Ricky Tang",
  description:
    "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
  keywords: [
    "ricky",
    "ricky tang",
    "ricky tang uw",
    "ricky tang uw se",
    "ricky tang uwaterloo",
    "ricky uw",
    "ricky uwaterloo",
    "ricky uw se",
    "swe",
    "software",
    "software engineering",
    "software engineer",
    "ricky tang portfolio",
    "ricky website",
    "ricky tang website",
    "uwaterloo software engineering",
    "uwaterloo se",
  ],
  authors: [{ name: "Ricky Tang" }],
  creator: "Ricky Tang",

  metadataBase: new URL("https://www.rickytang.dev"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rickytang.dev",
    siteName: "rickytang.dev",
    title: "Ricky Tang",
    description:
      "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricky Tang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ricky Tang",
    description:
      "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${jetbrainsMono.variable} ${gaegu.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <div className="relative flex flex-col flex-1 w-full px-6 sm:px-10 lg:px-0">
            <div className="flex-1">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
      {/* Google Analytics (next third parties) */}
      <GoogleAnalytics gaId="G-ZY5XWJ2B3D" />
      {/* Vercel Analytics (just to test it out lol) */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </html>
  );
}
