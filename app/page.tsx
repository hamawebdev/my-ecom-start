import { Navbar1 } from "@/components/navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { Hero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <>
        <Navbar1 />
      

      {/* <div className="-my-20"> */}
        <Hero />
      {/* </div> */}
          
       

     
        <Footerdemo />
      </>
  );
}
