import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

export const viewport: Viewport = {
  themeColor: "#00e676",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

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
    "PWA",
  ],
  authors: [{ name: "Hannah K" }],
  creator: "Hannah K",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hannah K",
  },
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Hannah K" />
        <meta name="application-name" content="Hannah K" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-tap-highlight" content="no" />
        
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
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
