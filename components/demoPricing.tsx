"use client";
import { Pricing } from "@/components/pricing";



const demoPlans = [
  {
    name: "BASIC SELLER",
    price: "29",
    yearlyPrice: "24",
    period: "per month",
    features: [
      "List up to 50 products",
      "Basic analytics dashboard",
      "48-hour support response time",
      "Standard payment processing",
      "Basic store customization",
      "Mobile-ready store",
      "Customer reviews system",
    ],
    description: "Perfect for individual sellers and small businesses",
    buttonText: "Start Selling",
    href: "/signup",
    isPopular: false,
  },
  {
    name: "BUSINESS",
    price: "79",
    yearlyPrice: "65",
    period: "per month",
    features: [
      "Unlimited product listings",
      "Advanced sales analytics",
      "24-hour support response time",
      "Reduced transaction fees",
      "Priority search placement",
      "Multi-user accounts",
      "Bulk product upload",
      "Inventory management",
    ],
    description: "Ideal for growing businesses and power sellers",
    buttonText: "Grow Your Business",
    href: "/signup",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "249",
    yearlyPrice: "199",
    period: "per month",
    features: [
      "Everything in Business",
      "Custom storefront design",
      "Dedicated account manager",
      "1-hour support response time",
      "Lowest transaction fees",
      "API access",
      "Advanced analytics & reporting",
      "Multiple store locations",
    ],
    description: "For large-scale sellers and established brands",
    buttonText: "Contact Sales",
    href: "/signup",
    isPopular: false,
  },
];

 function DemoPricing() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg overflow-hidden space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <Pricing 
          plans={demoPlans}
          title="Start Selling on Our Marketplace"
          description="Choose the plan that fits your business needs\nAll plans include secure payments, buyer protection, and access to millions of potential customers."
        />
      </div>
    </div>
  );
}

export { DemoPricing}
