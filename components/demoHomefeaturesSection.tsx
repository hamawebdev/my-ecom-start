import { FeatureSteps } from "@/components/feature-section"

const features = [
  { 
    step: 'Shop Smart',
    title: 'Curated Collections',
    content: 'Discover thoughtfully curated products from premium brands, handpicked for quality and style.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Shop Secure',
    title: 'Safe & Simple Checkout',
    content: 'Experience hassle-free shopping with our secure payment system and easy checkout process.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Shop Satisfied',
    title: 'Premium Experience',
    content: 'Enjoy fast shipping, 24/7 customer support, and our satisfaction guarantee on every purchase.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Shopping Made Better"
        autoPlayInterval={5000}
        imageHeight="h-[600px]"
      />
  )
}