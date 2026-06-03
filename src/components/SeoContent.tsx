import { BRAND } from "@/lib/brand";

const SeoContent = () => (
  <section className="py-12 bg-secondary/10">
    <div className="container mx-auto px-4 max-w-3xl prose prose-sm prose-invert">
      <h2 className="text-2xl font-bold mb-4">
        Lawn care in {BRAND.serviceArea}
      </h2>
      <p className="text-muted-foreground mb-4">
        {BRAND.name} is a locally owned lawn maintenance company serving Fort Myers,
        Cape Coral, Lehigh Acres, Bonita Springs, Estero, and the rest of Lee County.
        We mow, edge, trim hedges and palms, install mulch and sod, run fertilization
        and weed control programs, and handle storm and leaf cleanup.
      </p>
      <p className="text-muted-foreground">
        Florida lawns have specific needs — the right mowing height for St. Augustine,
        the right fertilizer window under Lee County's summer ordinance, the right
        irrigation schedule for sandy soil. We build maintenance plans around what
        your yard actually needs, not a generic schedule.
      </p>
    </div>
  </section>
);

export default SeoContent;
