// app/about/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - ChoozPainters",
  description:
    "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  keywords:
    "contact ChoozPainters, painter directory support, local painters contact, Electricians Contractors help, ChoozPainters contact form",
  robots: "index, follow",
  openGraph: {
    title: "About - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
    url: "https://choozelectricians.com/about",
    siteName: "ChoozPainters",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  },
  alternates: {
    canonical: "https://choozelectricians.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
