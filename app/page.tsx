import { Navbar1 } from "@/components/navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { Hero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="mx-4">
        <Navbar1 />
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <Hero />
        </section>

        {/* Add more sections here for your content */}
      </main>

      <footer className="mt-auto">
        <Footerdemo />
      </footer>
    </div>
  );
}
