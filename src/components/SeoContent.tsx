import { BRAND } from "@/lib/brand";

const SeoContent = () => (
  <section className="py-12 bg-secondary/10">
    <div className="container mx-auto px-4 max-w-3xl prose prose-sm prose-invert">
      <h2 className="text-2xl font-bold mb-4">
        Landscaping &amp; tree services in {BRAND.serviceArea}
      </h2>
      <p className="text-muted-foreground mb-4">
        {BRAND.name} is a locally owned landscaping and tree services company based in
        Lehigh Acres and serving Fort Myers, Cape Coral, Bonita Springs, Estero, Naples,
        and the rest of Lee &amp; Collier County. We mow, edge, trim hedges and palms,
        install mulch and sod, design and install landscapes, and handle tree trimming
        and removal — including stump grinding.
      </p>
      <p className="text-muted-foreground">
        As FNGLA Certified Horticultural Professionals through the University of Florida's
        program, we match plant selection to your soil, light, and Florida climate, follow
        proper pruning standards on every palm and tree, and build maintenance plans around
        what your property actually needs.
      </p>
    </div>
  </section>
);

export default SeoContent;
