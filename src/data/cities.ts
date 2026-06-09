export type CityFAQ = { question: string; answer: string };
export type CityPriceRow = { service: string; range: string; note?: string };
export type NeighborhoodNote = { name: string; note: string };

export type City = {
  slug: string;
  name: string;
  state: string;
  zips: string[];
  neighborhoods: string[];
  neighborhoodNotes?: NeighborhoodNote[];
  intro: string;
  paragraphs: string[];
  geo: { lat: number; lng: number };
  pricing?: CityPriceRow[];
  faqs?: CityFAQ[];
  mapEmbed?: string;
};

const PRICING_DEFAULT: CityPriceRow[] = [
  { service: "Weekly lawn mowing (standard 1/4 acre lot)", range: "$45 – $85", note: "Mow, edge, trim, blow" },
  { service: "Bi-weekly maintenance", range: "$65 – $110" },
  { service: "Hedge & shrub trimming", range: "$95 – $325", note: "Depends on linear feet & height" },
  { service: "Palm tree trimming", range: "$75 – $225 per palm", note: "Sabal, queen, royal — height-based" },
  { service: "Tree trimming (small to mid-size)", range: "$285 – $850" },
  { service: "Tree removal", range: "$450 – $2,400", note: "Size, access, and stump removal vary" },
  { service: "Mulch installation", range: "$95 – $135 per yard", note: "Delivered & spread" },
  { service: "Sod installation & repair", range: "$1.25 – $2.10 per sq ft", note: "St. Augustine, Zoysia, Bahia" },
  { service: "Landscape design consult", range: "$0 – $150", note: "Free for installs over $1,500" },
];

const FAQ_BASE = (cityName: string, _state: string): CityFAQ[] => [
  {
    question: `Do you really service every neighborhood in ${cityName}?`,
    answer: `Yes — we run regular weekly routes throughout ${cityName} for both residential and commercial properties. Whether it's a single-family lot, a condo association, or a small commercial site, we'll quote it.`,
  },
  {
    question: `How much does landscaping cost in ${cityName}?`,
    answer: `A standard weekly mow on a quarter-acre lot in ${cityName} runs $45–$85. Tree trimming, mulch, and full landscape installs are quoted on-site after a free estimate.`,
  },
  {
    question: `Can you do same-week service in ${cityName}?`,
    answer: `Same-week quotes are typical for ${cityName}. Storm cleanup, palm trimming, and tree removal usually fit within a few days. Call or text (239) 265-0439 and we'll respond directly.`,
  },
  {
    question: `Are you licensed and insured?`,
    answer: `Yes — Sonny's is a licensed and insured Florida landscaping business, and we hold Certified Horticultural Professional credentials through UF's FNGLA program.`,
  },
  {
    question: `Do you handle tree removal as well as trimming?`,
    answer: `Yes. We trim, raise, thin, and fully remove trees — including stump grinding on most jobs. We assess any storm-damaged or leaning tree before quoting so the safest removal plan is used.`,
  },
];

export const cities: City[] = [
  {
    slug: "lehigh-acres",
    name: "Lehigh Acres",
    state: "FL",
    zips: ["33936", "33971", "33972", "33973", "33974", "33976"],
    geo: { lat: 26.6121, lng: -81.6237 },
    neighborhoods: [
      "Lee Boulevard",
      "Sunshine Boulevard",
      "Gunnery Road",
      "Joel Boulevard",
      "Buckingham",
      "Alabama Road",
    ],
    neighborhoodNotes: [
      { name: "Lee Boulevard", note: "Steady weekly mowing routes here — most lots are quarter-acre with St. Augustine and full sun." },
      { name: "Sunshine Boulevard", note: "Mature oaks and palms mean regular trimming, leaf cleanup, and selective canopy raising." },
      { name: "Gunnery Road", note: "Larger lots; we handle full-property maintenance including hedge lines and palm groves." },
      { name: "Joel Boulevard", note: "Mix of rentals and owner-occupied homes — flexible bi-weekly schedules are common here." },
      { name: "Buckingham", note: "Semi-rural acreage with mature trees. Tree removal, brush clearing, and pasture mowing welcome." },
      { name: "Alabama Road", note: "Commercial frontage and small offices — we maintain several local businesses on weekly routes." },
    ],
    intro:
      "Sonny's Landscaping & Tree Services is based right here in Lehigh Acres, FL. We mow, trim, mulch, install sod, and handle tree trimming and removal across every Lehigh ZIP — backed by FNGLA Certified Horticultural Professional credentials.",
    paragraphs: [
      "Lehigh Acres covers nearly 96 square miles of single-family lots, semi-rural acreage, and small commercial property — and we service all of it from our home base off 28th St SW. Weekly and bi-weekly mowing routes cover 33936, 33971, 33972, 33973, 33974, and 33976, with edging, line trimming, and blowdown on every visit.",
      "Lehigh's signature mature tree canopy is a big share of our work. We trim and remove queen palms, sabal palms, oaks, and pines using the right cuts for each species — never the over-trimmed 'hurricane cut' that weakens palm crowns and slows growth. Storm-damaged or leaning trees are assessed before any removal so the safest takedown plan is used.",
      "Mulch refreshes, sod replacement, and full landscape installs round out the work. St. Augustine is the default lawn grass here, with Bahia common on larger lots and Zoysia on premium properties — and we mow each to its proper height so the turf stays thick and crowds out weeds without scalping.",
      "Need a free quote in Lehigh? Call or text (239) 265-0439 — Sonny answers directly.",
    ],
    faqs: [
      {
        question: "What areas of Lehigh Acres do you cover?",
        answer: "Every Lehigh Acres ZIP — 33936, 33971, 33972, 33973, 33974, and 33976 — plus Buckingham and Alva-adjacent properties. We're based off 28th St SW so response times across Lehigh are short.",
      },
      {
        question: "Do you offer weekly mowing in Lehigh?",
        answer: "Yes. Weekly is our most popular schedule April through October when St. Augustine is actively growing. Bi-weekly fits well November through March when growth slows. Each visit includes mowing, edging, line trimming, and blowdown.",
      },
      {
        question: "Can you trim and remove palms?",
        answer: "Yes — sabal, queen, royal, and Christmas palms are all routine. We follow the FNGLA pruning standard and never cut above the horizontal line of the fronds, which is what weakens or kills palms over time.",
      },
      {
        question: "How fast can you get out for a quote?",
        answer: "Usually within a few days. Storm cleanup and dangerous-tree calls get prioritized. Call or text (239) 265-0439.",
      },
    ],
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    state: "FL",
    zips: ["33901", "33905", "33907", "33908", "33912", "33913", "33916", "33919", "33966", "33967"],
    geo: { lat: 26.6406, lng: -81.8723 },
    neighborhoods: [
      "Downtown Fort Myers",
      "McGregor",
      "Gateway",
      "Whiskey Creek",
      "Iona",
      "South Fort Myers",
      "Fort Myers Beach",
    ],
    neighborhoodNotes: [
      { name: "Downtown Fort Myers", note: "Tight courtyards and historic-district plantings — small-yard maintenance and detail trimming are our bread and butter here." },
      { name: "McGregor", note: "Mature royal palms and old-growth oaks. Regular canopy work, deep mulch beds, and seasonal color installs." },
      { name: "Gateway", note: "Newer construction with planned landscape packages. We refresh mulch, replace failed sod patches, and trim hedges on weekly routes." },
      { name: "Whiskey Creek & Iona", note: "Older neighborhoods with established landscapes — selective tree removal and shrub renewal pruning are common." },
      { name: "South Fort Myers", note: "Condo and townhome associations — we handle full-property maintenance including hedge lines and palm groves." },
      { name: "Fort Myers Beach", note: "Salt-tolerant plant care and sand-soil mulching. We use species suited to the coast." },
    ],
    intro:
      "Sonny's brings full-service landscaping and tree work to every Fort Myers ZIP — weekly maintenance, palm and tree trimming, mulch, sod, and full landscape design from a Lehigh-based crew that knows the area.",
    paragraphs: [
      "Fort Myers is a wide service area for us, from the historic downtown blocks to the newer Gateway corridor. Coverage spans 33901, 33905, 33907, 33908, 33912, 33913, 33916, 33919, 33966, and 33967, with weekly and bi-weekly maintenance routes running through each.",
      "Tree work is the biggest non-maintenance driver in Fort Myers — old McGregor royals that need careful canopy trimming, oaks that need raising and thinning after summer storms, and removals on damaged or leaning trees that threaten roofs and pool cages. We trim to FNGLA standards and grind stumps below grade on most removals.",
      "Landscape installs round out the work: mulch beds, replacement sod, hedge plantings, and full design-and-install for renovations. We're FNGLA Certified Horticultural Professionals, so plant selection is matched to soil, light, and Florida climate rather than what's on sale that week.",
    ],
    faqs: [
      {
        question: "Do you handle Fort Myers commercial properties too?",
        answer: "Yes — small offices, retail centers, condo associations, and HOA common areas. We can set up weekly or bi-weekly routes and quote tree work, mulch, and seasonal color separately.",
      },
      {
        question: "Can you trim mature oaks and royal palms in McGregor?",
        answer: "Absolutely — that's a regular part of our Fort Myers work. We use the right cuts for each species and never over-prune. Quotes are based on tree count, height, and access.",
      },
      {
        question: "How is your landscape design process?",
        answer: "A free on-site consult, then a plant list and layout matched to your soil, light, and irrigation. Install is typically scheduled within 2–3 weeks once the design is approved.",
      },
    ],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    state: "FL",
    zips: ["33904", "33909", "33914", "33990", "33991", "33993"],
    geo: { lat: 26.5629, lng: -81.9495 },
    neighborhoods: [
      "Pelican",
      "Cape Harbour",
      "Tarpon Point",
      "Sandoval",
      "Burnt Store",
      "Hancock",
      "Country Club",
      "Pine Island Road corridor",
    ],
    neighborhoodNotes: [
      { name: "Cape Harbour & Tarpon Point", note: "Waterfront salt-tolerant landscaping — we plant and maintain species that hold up to wind and brine." },
      { name: "Pelican & Country Club", note: "Established neighborhoods with mature trees. Selective trimming, removals, and lawn renovation are common here." },
      { name: "Sandoval & Hancock", note: "Newer developments with planned landscapes — mulch refresh, hedge trim, and sod patches keep curb appeal sharp." },
      { name: "Pine Island Road corridor", note: "Commercial frontage maintenance — we keep retail and office landscapes on weekly routes." },
    ],
    intro:
      "Sonny's serves all of Cape Coral with weekly lawn maintenance, hedge and palm trimming, tree trimming and removal, mulch, sod, and full landscape installs — including salt-tolerant plantings for waterfront properties.",
    paragraphs: [
      "Cape Coral's grid covers all of 33904, 33909, 33914, 33990, 33991, and 33993, and we run regular routes through each. Lot sizes and plant palettes vary a lot between the south Cape waterfront and the north Cape's newer construction, so we tailor maintenance and plant selection accordingly.",
      "Waterfront properties get extra attention. Salt air and exposed beds need the right species — silver buttonwood, sea grape, gumbo limbo, sabal palm — and a mulching strategy that holds up to wind. We also handle dock-side and seawall hedge work that most crews won't touch.",
      "Tree trimming and removal are a steady share of Cape work. Hurricane-damaged trees, leaning ficus, and overgrown queens are all routine. Storm cleanup is prioritized and same-week response is typical.",
    ],
    faqs: [
      {
        question: "Do you service waterfront homes including the south Cape?",
        answer: "Yes — every Cape Coral ZIP, including Cape Harbour, Tarpon Point, Burnt Store, Pelican, and Sandoval. Salt-tolerant plant selection is part of our default approach for waterfront properties.",
      },
      {
        question: "Can you remove a hurricane-damaged tree?",
        answer: "Yes. Damaged or leaning trees get assessed on-site before quoting so the safest takedown plan is used. We grind stumps below grade and haul off debris on most removals.",
      },
      {
        question: "Same-week storm cleanup in Cape Coral?",
        answer: "Yes — storm and wind damage gets prioritized in our schedule. Call or text (239) 265-0439.",
      },
    ],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    state: "FL",
    zips: ["34134", "34135"],
    geo: { lat: 26.3398, lng: -81.7787 },
    neighborhoods: [
      "Bonita Beach",
      "Pelican Landing",
      "Worthington",
      "San Carlos Estates",
      "Bonita Bay",
      "Imperial Parkway corridor",
    ],
    neighborhoodNotes: [
      { name: "Bonita Beach & Pelican Landing", note: "Waterfront salt-tolerant landscaping. We default to species that hold up to wind and brine." },
      { name: "Worthington & San Carlos Estates", note: "Established neighborhoods with mature trees — selective trimming and palm care are common." },
      { name: "Bonita Bay", note: "Country-club-level landscape standards. Detailed hedge work and seasonal color installs welcome." },
    ],
    intro:
      "Sonny's covers Bonita Springs from Bonita Beach to Worthington — weekly maintenance, palm and tree trimming, mulch, sod, and full landscape design, with salt-tolerant plant selection for coastal homes.",
    paragraphs: [
      "Bonita Springs sits at the south edge of Lee County and the north edge of Collier — and we serve both. Coverage runs across 34134 and 34135 and into the Bonita Bay, Pelican Landing, and Worthington communities.",
      "Coastal salt air is a factor here, so plant selection and mulching strategy matter. We default to silver buttonwood, sea grape, sabal, and other proven Florida natives that hold up to wind and brine — backed by FNGLA Certified Horticultural Professional credentials so plants get matched to site, not just to what's on the truck.",
      "Tree work, mulch, sod, and hedge installs round out the regular Bonita work. Call or text (239) 265-0439 for a free quote.",
    ],
  },
  {
    slug: "estero",
    name: "Estero",
    state: "FL",
    zips: ["33928", "33967", "34134", "34135"],
    geo: { lat: 26.4381, lng: -81.8068 },
    neighborhoods: [
      "Estero",
      "Coconut Point",
      "Grandezza",
      "West Bay",
      "Corkscrew Road corridor",
    ],
    neighborhoodNotes: [
      { name: "Coconut Point & Grandezza", note: "Master-planned communities with detailed landscape standards — weekly maintenance, mulch refresh, and seasonal color." },
      { name: "West Bay", note: "Mature trees and palm groves; regular canopy trimming and palm care." },
      { name: "Corkscrew Road corridor", note: "Larger lots with native plantings. Tree trimming and brush clearing are common." },
    ],
    intro:
      "Sonny's services Estero with weekly lawn maintenance, palm and tree work, mulch, sod, and landscape design — covering Coconut Point, Grandezza, West Bay, and the Corkscrew Road corridor.",
    paragraphs: [
      "Estero is a master-planned community area with high curb-appeal standards. Weekly mowing, edging, hedge trimming, and mulch refresh keep properties sharp through Florida's growing season.",
      "Tree and palm work is a significant share of the work here — sabal, queen, and royal palms are abundant and need the right cuts to stay healthy. We follow FNGLA pruning standards and never over-trim.",
      "Need a free quote? Call or text (239) 265-0439.",
    ],
  },
];

// Attach defaults (pricing + FAQs) without bloating the literals above.
for (const c of cities) {
  if (!c.pricing) c.pricing = PRICING_DEFAULT;
  if (!c.faqs) c.faqs = FAQ_BASE(c.name, c.state);
}

export const getCityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug);
