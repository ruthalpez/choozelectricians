import Image from "next/image";

import ElectricianLightingInstallation from "@/images/categories/chooz_eletricians_ lighting _installation_and_repair_icon.png";
import ElectricianPanelUpgradeAndReplacement from "@/images/categories/chooz_eletricians_elctrical_ panel_upgrade_and_replacement_icon.png";
import ElectricianRepairAndTroubleshooting from "@/images/categories/chooz_eletricians_elctrical_ repair_and_troubleshooting_icon.png";
import ElectricianSafetyInspectionAndCodeCompliance from "@/images/categories/chooz_eletricians_elctrical_safety_inspection_and_code_compliance_icon.png";
import ElectricianSurgeProtectionInstallation from "@/images/categories/chooz_eletricians_surge_ protection_installation_icon.png";
import ElectricianInstallation from "@/images/categories/choz_eletricians_ielctrical installation_icon.png";

const categories = [
  {
    title: "Electrician Lighting Installation",
    image: ElectricianLightingInstallation,
    alt: "Icon of a paint roller inside a house shape, representing exterior house painting services",
    link: "electrician-lighting-installation",
  },
  {
    title: "Electrician Panel Upgrade and Replacement",
    image: ElectricianPanelUpgradeAndReplacement,
    alt: "Icon of a paintbrush resting in a paint can, representing interior painting services",
    link: "electrician-panel-upgrade-and-replacement",
  },
  {
    title: "Electrician Repair and Troubleshooting",
    image: ElectricianRepairAndTroubleshooting,
    alt: "Icon of a spray paint gun applying paint to a striped commercial surface, representing commercial painting services",
    link: "electrician-repair-and-troubleshooting",
  },
  {
    title: "Electrician Safety Inspection and Code Compliance",
    image: ElectricianSafetyInspectionAndCodeCompliance,
    alt: "Icon of a cabinet with a paintbrush symbol, representing cabinet painting services",
    link: "electrician-safety-inspection-and-code-compliance",
  },
  {
    title: "Electrician Surge Protection Installation",
    image: ElectricianSurgeProtectionInstallation,
    alt: "Icon of a pressure washer machine with spray wand, representing exterior cleaning and pressure washing services",
    link: "electrician-surge-protection-installation",
  },
  {
    title: "Electrician Installation",
    image: ElectricianInstallation,
    alt: "Icon of a paintbrush applying stain or paint to angled wooden planks, representing deck and fence painting services",
    link: "electrician-installation",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-between w-full sm:max-w-[500px] lg:max-w-[1340px] mx-auto">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white text-center p-[15px] md:shadow-sm w-[130px] md:border border-gray-100 rounded-xl">
          <Image
            src={category.image}
            alt={category.title}
            width={45}
            height={45}
            className="w-full h-[45px] object-contain mb-3"
          />
          <p className="text-sm font-semibold text-center">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
