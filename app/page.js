import HomePage from "../container/HomePage";
import { Metadata } from "next";

export const metadata = {
  metadataBase: new URL('https://Anrafagency.vercel.app'),
  title: "Anraf",
  description: "Anraf is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
  keywords: "Anraf, Anraf, Anraf.com, web development, kerala, kollam, trivandrum, india, freelance, freelance developers, best developer Anraf, Anraf freelance team, Anraf web developers, Anraf, Anraf, WEB DEVELOPMENT, Anraf, Anraf",
  authors: [{ name: "Louafi salem" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Anraf",
    description: "Anraf is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
    images: ["/images/banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anraf",
    description: "Anraf is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
    images: ["/images/banner.jpeg"],
  },
  other: {
    "revisit-after": "7 days",
    copyright: "Anraf . © Copyright 2022, All Rights Reserved.",
  },
};

export default function Home() {
  return <HomePage />;
}
