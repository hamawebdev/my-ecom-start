
import { HeroSection } from "@/components/hero-section-dark";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { DemoPricing } from "@/components/demoPricing";
import {Footerdemo} from "@/components/ui/footer-section"
const title="Why Work With Us? "
const description=""
export default function SellerPage() {
  return (
    <>
      <HeroSection
        title="Start Selling Online Today"
        subtitle={{
          regular: "Turn your products into a ",
          gradient: "thriving online business",
        }}
        description="Join thousands of successful sellers on our platform. Get access to powerful tools, a vast customer base, and everything you need to grow your business online."
        ctaText="Start Selling"
        ctaHref="/signup"
        bottomImage={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
      <div className="container py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg whitespace-pre-line">
            {description}
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
        <DemoPricing />
        <Footerdemo />
    </>
  );
}

