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
    href: "/seller/sign-up",
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
    href: "/seller/sign-up",
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
    href: "/contact",
    isPopular: false,
  },
];

 function DemoPricing() {
  return (
    <div className="h-[800px] overflow-y-auto rounded-lg">
      <Pricing 
        plans={demoPlans}
        title="Start Selling on Our Marketplace"
        description="Choose the plan that fits your business needs\nAll plans include secure payments, buyer protection, and access to millions of potential customers."
      />
    </div>
  );
}

export { DemoPricing}
