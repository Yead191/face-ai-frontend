"use client";

import PlanCard from "./PlanCard";

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  buttonText: string;
  buttonStyle: string;
  isPopular?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 3.99,
    period: "per week",
    description: "Perfect to get started",
    buttonText: "Get Started",
    buttonStyle: "bg-[#A855F7] hover:bg-purple-700",
    features: [
      "1 analysis per week",
      "Detailed AI scores",
      "Personalized routines",
      "Progress tracking",
      "Email support",
    ],
  },
  {
    name: "Medium",
    price: 8.99,
    period: "per week",
    description: "Most popular choice",
    buttonText: "Choose Medium",
    buttonStyle:
      "bg-linear-to-r from-[#9810FA] to-[#E60076] hover:bg-magenta-600",
    isPopular: true,
    features: [
      "3 analyses per week",
      "Detailed AI scores",
      "Advanced personalized routines",
      "Advanced progress tracking",
      "Priority support",
      "Community access",
    ],
  },
  {
    name: "Unlimited",
    price: 19.99,
    period: "per week",
    description: "Most complete plan",
    buttonText: "Go Unlimited",
    buttonStyle: "bg-purple-600 hover:bg-purple-700",
    features: [
      "Unlimited analyses",
      "Ultra-detailed AI scores",
      "Advanced personalized routines",
      "Advanced progress tracking",
      "Premium support",
      "Premium community access",
      "Monthly video consultation",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-10 lg:py-20 container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="section-title">Choose Your Plan</h2>
        <p className="section-subtitle">
          Select the package that matches your goals
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {pricingPlans?.map((plan, index) => (
          <PlanCard key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-white text-sm">
        <p>
          Secure payment on PayPal • Cancel anytime • 30-day money back
          guarantee
        </p>
      </div>
    </section>
  );
}
