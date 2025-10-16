// app/pricing/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - ChoozPainters",
  description:
    "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  keywords:
    "contact ChoozPainters, painter directory support, local painters contact, Electricians Contractors help, ChoozPainters contact form",
  robots: "index, follow",
  openGraph: {
    title: "Pricing - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
    url: "https://choozelectricians.com/pricing",
    siteName: "ChoozPainters",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pricing - ChoozPainters",
    description:
      "Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  },
  alternates: {
    canonical: "https://choozelectricians.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
