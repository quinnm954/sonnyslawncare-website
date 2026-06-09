// Single source of truth for customer-selectable landscaping & tree services service types.
export const SERVICE_TYPES = [
  "Weekly Lawn Mowing",
  "Edging & Line Trimming",
  "Hedge & Shrub Trimming",
  "Fertilization & Weed Control",
  "Mulch Installation",
  "Palm Tree Trimming",
  "Sod Installation & Repair",
  "Irrigation Repair",
  "Leaf & Debris Cleanup",
  "Landscape Design",
  "Other",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];
