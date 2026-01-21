import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hassanmango.website"),
  title: {
    default: "Hassan Mango - Portfolio Website",
    template: "%s | Hassan Mango",
  },
  description:
    "Hassan Mango - Forward Deployed Engineer | Knox College Alumni | B.S. in Computer Science & Finance Minor | Ranked 4th Globally on Coding Kattis for DragonMaid.py",
  applicationName: "Hassan Mango Portfolio",
  authors: [{ name: "Hassan Mango" }],
  creator: "Hassan Mango",
  publisher: "Hassan Mango",
  keywords: [
    "Hassan Mango",
    "Forward Deployed Engineer",
    "Frontend Engineer",
    "Software Developer",
    "Knox College",
    "Computer Science",
    "Finance",
    "Kattis",
    "DragonMaid.py",
    "Software Engineer",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hassan Mango Portfolio",
    title: "Hassan Mango - Portfolio Website",
    description:
      "Hassan Mango - Forward Deployed Engineer | Knox College Alumni | B.S. in Computer Science & Finance Minor | Ranked 4th Globally on Coding Kattis for DragonMaid.py",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Mango - Portfolio Website",
    description:
      "Hassan Mango - Forward Deployed Engineer | Knox College Alumni | B.S. in Computer Science & Finance Minor | Ranked 4th Globally on Coding Kattis for DragonMaid.py",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hassan Mango",
    jobTitle: "Forward Deployed Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Knox College",
    },
    knowsAbout: [
      "Computer Science",
      "Finance",
      "Software Engineering",
      "AI Technologies",
      "Software Development",
      "Full-Stack Development",
      "Cloud Computing",
      "DevOps",
      "Agile Methodologies",
      "Open Source",
      "Web Development",
      "Mobile Development",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Database Management",
      "Cybersecurity",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    url: "https://hassanmango.website",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3c4a3c0d-18f6-46c6-86b9-84cd45e617c2"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
