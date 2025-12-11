import HomePage from "../container/HomePage";
import { Metadata } from "next";

export const metadata = {
  metadataBase: new URL('https://Anrafa.com'),
  title: "Anrafa",
  description: "Anrafa is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
  keywords: "Anrafa, Anrafa, Anrafa.com, web development, kerala, kollam, trivandrum, india, freelance, freelance developers, best developer Anrafa, Anrafa freelance team, Anrafa web developers, Anrafa, Anrafa, WEB DEVELOPMENT, Anrafa, Anrafa",
  authors: [{ name: "Anrafa Junaid S" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Anrafa",
    description: "Anrafa is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
    images: ["/images/banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anrafa",
    description: "Anrafa is a freelance team of industry experts providing digital solutions like Web Development, App Development and Branding.",
    images: ["/images/banner.jpeg"],
  },
  other: {
    "revisit-after": "7 days",
    copyright: "Anrafa . © Copyright 2022, All Rights Reserved.",
  },
};

export default function Home() {
  return <HomePage />;
}
