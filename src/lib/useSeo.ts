import { useEffect } from "react";

type Breadcrumb = { name: string; url: string };

type SeoOptions = {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: Breadcrumb[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const DYNAMIC_LD_ID = "ld-dynamic-seo";
export const SITE_URL = "https://elite-level-lawn-care.lovable.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const absUrl = (u?: string) => {
  if (!u) return undefined;
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE_URL}${u.startsWith("/") ? u : `/${u}`}`;
};

export const useSeo = ({
  title,
  description,
  canonical,
  noindex,
  ogImage,
  ogType = "website",
  breadcrumbs,
  jsonLd,
}: SeoOptions) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setProp = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setProp("og:description", description);
      setMeta("twitter:description", description);
    }
    setMeta("robots", noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large");
    setProp("og:title", title);
    setProp("og:type", ogType);
    setMeta("twitter:title", title);
    const img = absUrl(ogImage) || DEFAULT_OG_IMAGE;
    setProp("og:image", img);
    setMeta("twitter:image", img);
    setMeta("twitter:card", "summary_large_image");

    const canonicalAbs = absUrl(canonical);
    let linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalAbs) {
      if (!linkEl) {
        linkEl = document.createElement("link");
        linkEl.setAttribute("rel", "canonical");
        document.head.appendChild(linkEl);
      }
      linkEl.setAttribute("href", canonicalAbs);
      setProp("og:url", canonicalAbs);
    }

    // Cleanup any existing dynamic JSON-LD blocks
    document
      .querySelectorAll(`script[data-seo="${DYNAMIC_LD_ID}"]`)
      .forEach((el) => el.remove());

    const blocks: Record<string, unknown>[] = jsonLd
      ? Array.isArray(jsonLd)
        ? [...jsonLd]
        : [jsonLd]
      : [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: absUrl(b.url),
        })),
      });
    }

    const scripts: HTMLScriptElement[] = [];
    for (const block of blocks) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = DYNAMIC_LD_ID;
      s.text = JSON.stringify(block);
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => {
      document.title = previousTitle;
      scripts.forEach((s) => s.remove());
    };
  }, [
    title,
    description,
    canonical,
    noindex,
    ogImage,
    ogType,
    JSON.stringify(breadcrumbs),
    JSON.stringify(jsonLd),
  ]);
};
