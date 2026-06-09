export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readingMinutes: number;
  content: string;
  coverImage?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-mowing-height-st-augustine-florida",
    title: "The Best Mowing Height for St. Augustine Grass in Florida",
    excerpt:
      "St. Augustine is the most common lawn grass in Lee County. Here's the mowing height that keeps it thick, green, and weed-free.",
    date: "2026-04-10",
    author: "Sonny's Landscaping & Tree Services",
    tags: ["lawn-care", "mowing"],
    readingMinutes: 4,
    content:
      "St. Augustine grass thrives when mowed tall. In Southwest Florida, the sweet spot is 3.5 to 4 inches. Cutting shorter stresses the grass, invites weeds, and lets the sun bake the soil. We mow weekly during the growing season (April through October) and bi-weekly through the cooler months.",
  },
  {
    slug: "when-to-fertilize-lee-county-lawn",
    title: "When to Fertilize Your Lawn in Lee County, FL",
    excerpt:
      "Florida fertilizer ordinances limit when you can apply nitrogen. Here's a simple schedule that keeps your lawn healthy and compliant.",
    date: "2026-03-22",
    author: "Sonny's Landscaping & Tree Services",
    tags: ["lawn-care", "fertilization"],
    readingMinutes: 5,
    content:
      "Lee County has a summer fertilizer ban from June 1 through September 30 on phosphorus and nitrogen. Plan your main applications in spring and fall, and use iron-only products in the summer to keep color without violating the ordinance.",
  },
  {
    slug: "palm-tree-trimming-southwest-florida",
    title: "Palm Tree Trimming in Southwest Florida: What to Know",
    excerpt:
      "Over-trimming palms can permanently damage them. Here's the right way to trim queens, sabals, and royal palms in Lee County.",
    date: "2026-02-14",
    author: "Sonny's Landscaping & Tree Services",
    tags: ["palm-trees", "trimming"],
    readingMinutes: 4,
    content:
      "Only remove fully brown or yellow fronds. 'Hurricane cuts' that strip the canopy weaken the tree and slow growth. We follow the 9-and-3 rule: never cut above the horizontal line of the fronds.",
  },
];
