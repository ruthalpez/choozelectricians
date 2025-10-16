"use client";

import Image from "next/image";
import ElectriciansCompanyBuilding from "@/images/buildings/chooz_electricians_company-1.png";
import ElectriciansCompanyBuildingMobile from "@/images/buildings/chooz_electricians_company-1.png";
import { useDevice } from "@/hooks/useDevice";

export default function ResponsiveImage() {
  const { isMobile, isDesktop } = useDevice();

  if (isDesktop) {
    return (
      <Image
        src={ElectriciansCompanyBuilding.src}
        alt="Illustration of an Electricians company building in the center of a cityscape with residential buildings and skyscrapers in the background"
        width={1000}
        height={1000}
        className="mx-auto w-full"
      />
    );
  }

  if (isMobile) {
    return (
      <Image
        src={ElectriciansCompanyBuildingMobile.src}
        alt="Illustration of an Electricians company building in the center of a cityscape with residential buildings and skyscrapers in the background"
        width={1000}
        height={1000}
        className="mx-auto w-full"
      />
    );
  }

  return null; // Optional fallback
}
