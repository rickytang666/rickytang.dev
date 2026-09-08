import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

// fonts
import { Figtree, Gaegu, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const SITE_URL = "https://www.rickytang.dev";

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
    "meet ricky tang - software engineering at university of waterloo. engineering at hamming ai, wat.ai, and bindwell.",
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
    "hamming ai",
    "hamming",
    "wat.ai",
    "bindwell",
  ],
  authors: [{ name: "Ricky Tang" }],
  creator: "Ricky Tang",

  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "rickytang.dev",
    title: "Ricky Tang",
    description: "meet ricky tang - software engineering at university of waterloo.",
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
    description: "meet ricky tang - software engineering at university of waterloo.",
    images: ["/og-image-twitter.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    canonical: SITE_URL,
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Navbar />
          <div className="relative w-full px-6 sm:px-10 lg:px-0 py-10">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
      {/* google analytics */}
      <GoogleAnalytics gaId="G-ZY5XWJ2B3D" />
      {/* vercel analytics */}
      <Analytics />
      {/* vercel speed insights */}
      <SpeedInsights />
    </html>
  );
}
