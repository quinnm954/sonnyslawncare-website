// Map of service slug to city slug overrides (kept minimal for the lawn-care template).
export type ServiceCityRow = {
  serviceSlug: string;
  cityOverrides?: Record<string, { intro?: string; note?: string }>;
};

export const SERVICE_CITY_MATRIX: ServiceCityRow[] = [];

export function getServiceCityOverride(_serviceSlug: string, _citySlug: string) {
  return undefined;
}
