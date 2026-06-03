import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "@/lib/brand";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 active:scale-95 transition-transform"
            onClick={close}
          >
            <span className="text-lg md:text-xl font-bold text-primary">
              {BRAND.shortName}
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Lawn Care
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="ml-2">
              <a href={`tel:${BRAND.phoneDigits}`} className="gap-2">
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-1 pt-3">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild size="lg" className="mt-2">
                <a href={`tel:${BRAND.phoneDigits}`} className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call {BRAND.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
