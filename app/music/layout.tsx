import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "DJ sets and mixes by Hassan Mango — Forward Deployed Engineer and music hobbyist. Listen to original sets including Boogie Disco Groove and Aghani.",
  alternates: {
    canonical: "/music",
  },
  openGraph: {
    title: "Music - Hassan Mango",
    description:
      "DJ sets and mixes by Hassan Mango. Listen to original tracks including Boogie Disco Groove and Aghani.",
    url: "/music",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music - Hassan Mango",
    description:
      "DJ sets and mixes by Hassan Mango. Listen to original tracks including Boogie Disco Groove and Aghani.",
  },
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
