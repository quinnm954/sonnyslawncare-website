// Single source of truth for customer-selectable landscaping & tree services service types.
export const SERVICE_TYPES = [
  "Weekly Lawn Mowing",
  "Edging & Line Trimming",
  "Hedge & Shrub Trimming",
  "Palm Tree Trimming",
  "Tree Trimming & Pruning",
  "Tree Removal & Stump Grinding",
  "Mulch Installation",
  "Sod Installation & Repair",
  "Irrigation Repair",
  "Leaf & Debris Cleanup",
  "Landscape Design & Install",
  "Other",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];
