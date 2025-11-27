import React from "react";
import { Check, CornerRightDown } from "lucide-react";

interface PlanCardProps {
  plan: {
    name: string;
    price: number;
    period: string;
    description: string;
    buttonText: string;
    buttonStyle: string;
    isPopular?: boolean;
    features: string[];
  };
  index: number;
}
export default function PlanCard({ plan, index }: PlanCardProps) {
  return (
    <div
      key={index}
      className={`relative ${
        plan.isPopular
          ? "bg-linear-to-r from-[#1869CC] via-[#742AFE] to-[#E30BEB] rounded-2xl pt-11 pb-0.5 px-0.5"
          : ""
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center gap-2">
            <CornerRightDown /> Best Deal
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 flex flex-col bg-[#000000] ${
          plan.isPopular
            ? "border-2 border-[#9810FA] lg:h-[550px]"
            : "border-2 border-[#9810FA] lg:min-h-[570px]"
        }`}
      >
        {/* Plan Name and Price */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
          <div className="flex items-end justify-center  gap-1">
            €
            <span className="text-5xl font-semibold text-white">
              {plan.price.toFixed(2)}
            </span>
          </div>
          <span className="text-gray-400">{plan.period}</span>
        </div>

        {/* Features List */}
        <ul className={`space-y-3 mb-8 ${plan.isPopular ? "" : "grow"}`}>
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <div
                className={`p-1 rounded-full ${
                  plan.isPopular
                    ? "bg-linear-to-br from-[#9810FA] to-[#E60076] "
                    : "bg-[#8200DB] "
                }`}
              >
                <Check className="w-4 h-4 text-magenta-500 shrink-0 mt-0.5" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 cursor-pointer ${plan.buttonStyle}`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
}
