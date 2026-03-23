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
    "Hassan Mango portfolio",
    "Forward Deployed Engineer",
    "Solutions Architect",
    "Prairie Shields Tech",
    "Frontend Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Golang developer",
    "Go developer",
    "Next.js developer",
    "AI engineer",
    "Knox College",
    "Knox College Computer Science",
    "Computer Science",
    "Finance",
    "B2B lead generation",
    "LeadSouq",
    "Kattis",
    "DragonMaid.py",
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
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 640,
        alt: "Hassan Mango - Forward Deployed Engineer & Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Mango - Portfolio Website",
    description:
      "Hassan Mango - Forward Deployed Engineer | Knox College Alumni | B.S. in Computer Science & Finance Minor | Ranked 4th Globally on Coding Kattis for DragonMaid.py",
    images: ["/og-image.png"],
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hassan Mango",
    jobTitle: "Forward Deployed Engineer & Solutions Architect",
    email: "hmango77@gmail.com",
    url: "https://hassanmango.website",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Knox College",
    },
    worksFor: {
      "@type": "Organization",
      name: "Prairie Shields Tech",
    },
    sameAs: [
      "https://github.com/illyangz",
      "https://linkedin.com/in/hassan-mango",
      "https://x.com/illyangz",
      "https://soundcloud.com/yangzog",
    ],
    knowsAbout: [
      "Computer Science",
      "Finance",
      "Software Engineering",
      "AI Technologies",
      "Software Development",
      "Full-Stack Development",
      "Cloud Computing",
      "DevOps",
      "Go (Golang)",
      "Rust",
      "TypeScript",
      "Next.js",
      "Agile Methodologies",
      "Open Source",
      "Web Development",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Database Management",
      "Machine Learning",
      "Artificial Intelligence",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hassan Mango Portfolio",
    url: "https://hassanmango.website",
    description:
      "Portfolio of Hassan Mango — Forward Deployed Engineer & Solutions Architect at Prairie Shields Tech.",
    author: {
      "@type": "Person",
      name: "Hassan Mango",
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
