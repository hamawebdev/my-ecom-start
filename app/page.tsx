import { Navbar1 } from "@/components/navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { Hero } from "@/components/ui/animated-hero";
import { FeatureStepsDemo } from "@/components/demoHomefeaturesSection";
import { Faq1 } from "@/components/faq";

export default function Home() {
  return (
    <>
    <header >
      <Navbar1 />
    </header>
      

        <Hero />
          
       <FeatureStepsDemo />

        <Faq1 />
     
        <Footerdemo />
      </>
  );
}
