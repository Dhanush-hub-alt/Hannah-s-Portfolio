import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://hannah-k.dev"),
  title: "Hannah's Portfolio",
  description:
    "Official portfolio of Hannah K, Computer Science and Engineering student at Nandha College of Technology (2023–2027). Specializing in embedded systems, vehicle AI, sensor fusion, and data visualization.",
  keywords: [
    "Hannah's Portfolio",
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
    title: "Hannah's Portfolio",
    description:
      "Explore the engineering projects, technical expertise, certifications, and academic journey of Hannah K.",
    siteName: "Hannah's Portfolio",
    images: [
      {
        url: "/images/hannah_profile.jpg",
        width: 1200,
        height: 630,
        alt: "Hannah's Portfolio - Computer Science and Engineering Student",
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
    <html lang="en" className="scroll-smooth light" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Synchronous script to enforce default light theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var s = sessionStorage.getItem('hannah_portfolio_theme');
                  if (s === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('hannah_portfolio_theme', 'light');
                  }
                } catch (e) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans bg-theme-bg text-theme-primary antialiased transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
