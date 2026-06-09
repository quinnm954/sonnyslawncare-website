import {
  Scissors,
  Leaf,
  Sprout,
  TreePine,
  Droplets,
  Trees,
  Flower2,
  Shovel,
  Brush,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; name: string };
export type Category = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    id: "lawn-maintenance",
    title: "Lawn Maintenance",
    icon: Scissors,
    description:
      "Reliable weekly and bi-weekly mowing, edging, and trimming to keep your Lee County lawn looking sharp year-round.",
    services: [
      { icon: Scissors, name: "Weekly Lawn Mowing" },
      { icon: Brush, name: "Edging & Line Trimming" },
      { icon: Wind, name: "Blowing & Cleanup" },
      { icon: Leaf, name: "Bi-Weekly Maintenance" },
    ],
  },
  {
    id: "trimming-pruning",
    title: "Tree & Palm Services",
    icon: TreePine,
    description:
      "Tree trimming and removal, palm care, hedge and shrub pruning — done to FNGLA standards across Lee & Collier County.",
    services: [
      { icon: Trees, name: "Tree Trimming & Pruning" },
      { icon: Trees, name: "Tree Removal & Stump Grinding" },
      { icon: TreePine, name: "Palm Tree Trimming" },
      { icon: Scissors, name: "Hedge & Shrub Trimming" },
    ],
  },
  {
    id: "lawn-health",
    title: "Lawn Health & Treatment",
    icon: Sprout,
    description:
      "Fertilization, weed control, and pest programs tailored to Florida grasses like St. Augustine, Zoysia, and Bahia.",
    services: [
      { icon: Sprout, name: "Fertilization Programs" },
      { icon: Leaf, name: "Weed Control" },
      { icon: Droplets, name: "Pest & Fungus Treatment" },
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping & Install",
    icon: Flower2,
    description:
      "Mulch, sod, planting, and full landscape design to refresh or completely transform your yard.",
    services: [
      { icon: Shovel, name: "Mulch Installation" },
      { icon: Sprout, name: "Sod Installation & Repair" },
      { icon: Flower2, name: "Plant & Flower Installation" },
      { icon: Trees, name: "Landscape Design" },
    ],
  },
  {
    id: "cleanup-irrigation",
    title: "Cleanup & Irrigation",
    icon: Droplets,
    description:
      "Leaf and storm debris cleanup plus sprinkler system tune-ups and repairs to keep your lawn thriving.",
    services: [
      { icon: Leaf, name: "Leaf & Debris Cleanup" },
      { icon: Wind, name: "Storm Cleanup" },
      { icon: Droplets, name: "Irrigation Repair" },
    ],
  },
];
