"use client";

import pricingPlans from "@/constants/home/pricingPlan";
import PlanCard from "./PlanCard";

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
