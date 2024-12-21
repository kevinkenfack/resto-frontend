import React from "react";
import LNavbar from "./LNavbar";
import HeroSection from "./HeroSection";
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import DemoSection from './DemoSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';
// Nous importerons les autres sections au fur et à mesure
// import BenefitsSection from "./BenefitsSection";
// import FAQSection from "./FAQSection";

export default function LandingPage() {
  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <LNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Demo Section */}
      <DemoSection />

      <TestimonialsSection />

      <PricingSection />

      <FAQSection />

      <CTASection />

      {/* Nous ajouterons les autres sections ici */}
      {/* <BenefitsSection /> */}
      {/* <FAQSection /> */}

      <Footer />
    </div>
  );
}
