// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim Your Electricians Contractor Listing - ChoozPainters",
  description:
    "Claim your Electricians Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  keywords:
    "contact ChoozPainters, painter directory support, local painters contact, Electricians Contractors help, ChoozPainters contact form",
  robots: "index, follow",
  openGraph: {
    title: "Claim Your Electricians Contractor Listing - ChoozPainters",
    description:
      "Claim your Electricians Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
    url: "https://choozelectricians.com/contact",
    siteName: "ChoozPainters",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Claim Your Electricians Contractor Listing - ChoozPainters",
    description:
      "Claim your Electricians Contractor listing on ChoozPainters. Get in touch with ChoozPainters. Contact us for support, questions about our painter directory, or assistance finding local Electricians Contractors in your area.",
  },
  alternates: {
    canonical: "https://choozelectricians.com/claim-electricians-contractor",
  },
};

export default function ClaimElectriciansContractorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
