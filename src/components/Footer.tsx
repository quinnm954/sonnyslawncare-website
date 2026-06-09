import { Link } from "react-router-dom";
import { categories } from "@/data/serviceCategories";
import { cities } from "@/data/cities";
import { BRAND } from "@/lib/brand";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-12 pb-6 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-lg font-bold text-primary mb-2">{BRAND.name}</p>
            <p className="text-sm text-muted-foreground">
              Landscaping &amp; tree services across {BRAND.serviceArea} — landscape design, tree trimming &amp; removal, mulch, sod, and full-property maintenance. Licensed, insured, and FNGLA Certified.
            </p>
            <a
              href={`tel:${BRAND.phoneDigits}`}
              className="block mt-3 text-primary hover:underline text-sm font-medium"
            >
              Call: {BRAND.phoneDisplay}
            </a>
            <a
              href={`sms:${BRAND.phoneDigits}`}
              className="block text-primary hover:underline text-sm font-medium"
            >
              Text: {BRAND.phoneDisplay}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/80">Hours:</span> {BRAND.hours}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/services/${c.id}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lee-county-fl" className="text-muted-foreground hover:text-primary">
                  Lee &amp; Collier County, FL
                </Link>
              </li>
              {cities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/areas/${c.slug}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-muted-foreground hover:text-primary">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {year} {BRAND.copyrightOwner}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
