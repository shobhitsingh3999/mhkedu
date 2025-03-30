import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, FileCheck, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  { name: "Study Abroad Made Easy" },
  { name: "Expert Visa Guidance & Support" },
  { name: "Achieve Your Dream Education" }
];

const cards = [
  {
    title: "Study Abroad",
    description: "Your gateway to global education opportunities.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    color: "#0F4C5C",
  },
  {
    title: "Visa Assistance",
    description: "Seamless guidance for your international journey.",
    icon: <FileCheck className="w-5 h-5 text-white" />,
    color: "#0D7377",
  },
  {
    title: "Language Coaching",
    description: "Achieve top scores with confidence and expert support.",
    icon: <Globe className="w-5 h-5 text-white" />,
    color: "#14BDEB",
  },
];

export default function FutureSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background elements - responsive sizing */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#0F4C5C]/5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#0F4C5C]/5 rounded-full -ml-24 sm:-ml-32 md:-ml-48 -mb-24 sm:-mb-32 md:-mb-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 lg:pl-4 xl:pl-6 order-2 lg:order-1">
            {/* Heading outside the card */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight sm:leading-[1.15] text-[#0F4C5C] font-normal mb-3 sm:mb-5">
                Your Pathway to Global Education
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#0F4C5C]/70">
                Through expert guidance and tailored support, we turn your dream of studying abroad into reality, making the process seamless.
              </p>
            </div>
            
            {/* Features card with image and points */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left side image */}
                <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                    alt="Student studying"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Right side features */}
                <div className="w-full md:w-3/5 p-4 sm:p-6 bg-[#9FE870]">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#0F4C5C] flex-shrink-0" />
                        <span className="text-sm sm:text-[15px] text-[#0F4C5C]">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button outside the card */}
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
              <Button className="h-10 sm:h-12 px-6 sm:px-8 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full text-sm sm:text-[15px] shadow-md">
                Free consultation
              </Button>
              </Link>
            </div>
          </div>

          {/* Right Side with Connected Floating Cards */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[580px] order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative h-full">
              {/* Main Image Container */}
              <div className="relative w-full md:w-[85%] lg:w-[90%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[580px] rounded-xl sm:rounded-2xl overflow-hidden mx-auto lg:ml-0">
                <Image
                  src="/images/girl.png"
                  alt="Professional woman"
                  fill
                  className="object-cover object-[center_25%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              </div>

              {/* Modified Non-Overlapping Cards with spacing */}
              <div className="absolute top-1/2 transform -translate-y-1/2 right-0 sm:-right-4 md:-right-8 lg:-right-12 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[40%] xl:w-[38%] flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
                {cards.map((card, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: card.color,
                      zIndex: 10 - index,
                    }}
                  >
                    <div className="p-3 sm:p-4 md:p-5 text-white">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg md:text-xl font-medium mb-0.5 sm:mb-1">{card.title}</h4>
                          <p className="text-xs sm:text-sm md:text-base text-white/80">{card.description}</p>
                        </div>
                      </div>
                      
                      {/* Arrow connector between cards */}
                      {index < cards.length - 1 && (
                        <div className="flex justify-center mt-2 sm:mt-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}