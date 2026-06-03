// Local SEO landing pages — empty in the template. Add lawn-care city/service combos here later.
export type LocalLandingPage = {
  slug: string;
  city: string;
  service: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  faqs: { question: string; answer: string }[];
};

export const localLandingPages: LocalLandingPage[] = [];

export function findLocalLandingPage(slug: string): LocalLandingPage | undefined {
  return localLandingPages.find((p) => p.slug === slug);
}
