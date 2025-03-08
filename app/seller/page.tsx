
import { HeroSection } from "@/components/hero-section-dark";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { DemoPricing } from "@/components/demoPricing";
import {Footerdemo} from "@/components/ui/footer-section"
import { DemoBackgroundPaths } from "@/components/demoHeroSeller";
import { TestimonialsDemo} from "@/components/demoTest"



const title="Why Work With Us? "
const description=""
export default function SellerPage() {
  return (
    <>
    <section>
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
          light: "images/app-light.png",
          dark: "images/app-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
    </section>
     
      {/* <DemoBackgroundPaths /> */}
      <section className="relative">
        <div className="absolute top-0 z-[0] h-full w-screen bg-white/50 dark:bg-zinc-950/50 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(0,0,0,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />
        
        <div className="container relative px-4 py-24 mx-auto sm:px-6 lg:px-8 z-10">
          <div className="relative max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-base md:text-lg text-gray-800 dark:text-gray-200 group mx-auto px-6 py-3 bg-gradient-to-tr from-zinc-100 via-zinc-200/40 to-transparent dark:from-zinc-800 dark:via-zinc-800/40 border-[2px] border-zinc-200 dark:border-zinc-800 rounded-3xl w-fit">
              {title}
            </h2>
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter font-geist bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-400">
                Empower Your Business
              </h3>
              <p className="text-4xl tracking-tighter font-geist text-zinc-900 dark:text-white mx-auto md:text-6xl">
                {description}
              </p>
            </div>
          </div>
          
          <div className="mt-16 relative z-10 bg-gradient-to-tr from-zinc-100 via-zinc-200/30 to-transparent dark:from-zinc-800 dark:via-zinc-700/20 border-zinc-200 dark:border-zinc-800 border-[1px] rounded-lg p-6">
            <FeaturesSectionWithHoverEffects />
          </div>
        </div>
      </section>
        <TestimonialsDemo/>
        <DemoPricing />
        <Footerdemo />
    </>
  );
}

