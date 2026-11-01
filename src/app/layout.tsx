import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hannah-k.dev"),
  title: "Hannah K | Computer Science & Engineering Portfolio",
  description:
    "Official portfolio of Hannah K, Computer Science and Engineering student at Nandha College of Technology (2023–2027). Specializing in embedded systems, vehicle AI, sensor fusion, and data visualization.",
  keywords: [
    "Hannah K",
    "Computer Science and Engineering",
    "Nandha College of Technology",
    "Portfolio",
    "Embedded AI",
    "Vehicle Collision Avoidance",
    "mmWave Radar",
    "Power BI",
    "Python",
    "C++",
  ],
  authors: [{ name: "Hannah K" }],
  creator: "Hannah K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hannah-k.dev",
    title: "Hannah K | Computer Science & Engineering Portfolio",
    description:
      "Explore the engineering projects, technical expertise, certifications, and academic journey of Hannah K.",
    siteName: "Hannah K Portfolio",
    images: [
      {
        url: "/images/hannah_profile.jpg",
        width: 1200,
        height: 630,
        alt: "Hannah K - Computer Science and Engineering Student",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg-main text-text-primary antialiased selection:bg-brand-indigo/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}
