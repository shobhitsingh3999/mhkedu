import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, FileText, Compass } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-[#0F4C5C]" />,
    title: "Application Assistance",
    description:
      "Our specialists assist you at every step, ensuring precise and hassle-free immigration.",
  },
  {
    icon: <Globe className="w-10 h-10 text-[#0F4C5C]" />,
    title: "Expert Guidance",
    description:
      "Get tailored guidance from experts, simplifying complex immigration processes with confidence.",
  },
  {
    icon: <FileText className="w-10 h-10 text-[#0F4C5C]" />,
    title: "Trusted by over 10,000 clients and agencies",
    description:
      "Join thousands of satisfied clients who have successfully navigated their immigration journey with our expert assistance.",
  },
  {
    icon: <Compass className="w-10 h-10 text-[#0F4C5C]" />,
    title: "Take control of your Career",
    description:
      "Explore opportunities worldwide with our comprehensive resources and personalized career planning services.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4C5C]/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F4C5C]/5 rounded-full -ml-48 -mb-48"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#0F4C5C" strokeWidth="0.2" opacity="0.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Heading and Button */}
          <div className="lg:w-[40%] flex flex-col">
            <div className="bg-[#0F4C5C]/10 text-[#0F4C5C] font-medium px-4 py-2 rounded-full w-fit mb-4">
              MHK Education Consultants
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium text-[#0F4C5C] mb-6">
              Transform Your Dreams into Reality!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              At MHK Consultants, we specialize in turning aspirations into achievements. With personalized guidance and expert solutions, we simplify your path to study, explore and thrive abroad.
            </p>
            <Button className="w-fit h-12 px-8 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full text-base shadow-lg transition-all duration-300 hover:shadow-xl">
              Consult Now!
            </Button>
          </div>

          {/* Right side - Features Grid */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-4 p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-[#E5F9E0]"
              >
                <div className="bg-[#0F4C5C]/10 p-3 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-[#0F4C5C]">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}