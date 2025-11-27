import React from "react";
import Banner from "./sections/Banner";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/pricing/Pricing";
import FAQSection from "./sections/FAQ";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQSection />
    </section>
  );
}
