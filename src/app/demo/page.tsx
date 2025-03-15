import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsBar from "@/components/StatsBar";
import AnalysisSection from "@/components/AnalysisSection";
import FutureSection from "@/components/FutureSection";
import StoriesSection from "@/components/StoriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import FooterSection from "@/components/FooterSection";
import FlowlessProcessComponent from "@/components/flowless";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white ">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <div className="-mt-50 relative z-10">
        <StatsSection />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Bar Section */}

      {/* Locations Section */}

      {/* Analysis Section */}
      <AnalysisSection />
      <LocationsSection />

      {/* Future Section */}
      <FutureSection />
      <StatsBar />
      <FlowlessProcessComponent />
      {/* Stories Section */}
      <StoriesSection />

      {/* Case Studies Section */}
      {/* <CaseStudiesSection /> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* Contact Section */}
      {/* <ContactSection /> */}

      {/* Footer Section */}
      <FooterSection />

      {/* Additional sections can be added here */}
    </main>
  );
}
