import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, FileCheck, Globe, CheckCircle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4C5C]/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F4C5C]/5 rounded-full -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 lg:pl-4 xl:pl-6">
            {/* Heading outside the card */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-[46px] leading-[1.15] text-[#0F4C5C] font-normal mb-5">
                Your Pathway to Global Education
              </h2>
              <p className="text-base md:text-lg text-[#0F4C5C]/70">
                Through expert guidance and tailored support, we turn your dream of studying abroad into reality, making the process seamless.
              </p>
            </div>
            
            {/* Features card with image and points */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left side image */}
                <div className="md:w-2/5 h-56 md:h-auto relative">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                    alt="Student studying"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Right side features */}
                <div className="md:w-3/5 p-6 bg-[#9FE870]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <CheckCircle className="w-5 h-5 text-[#0F4C5C] flex-shrink-0" />
                        <span className="text-[15px] text-[#0F4C5C]">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button outside the card */}
            <div className="mt-8">
              <Button className="h-12 px-8 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full text-[15px] shadow-md">
                Free consultation
              </Button>
            </div>
          </div>

          {/* Right Side with Connected Floating Cards */}
          <div className="lg:col-span-7 relative min-h-[400px] md:min-h-[580px]">
            <div className="relative h-full">
              {/* Main Image Container */}
              <div className="relative w-full md:w-[85%] lg:w-[90%] h-[350px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden mx-auto lg:ml-0">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076"
                  alt="Professional woman"
                  fill
                  className="object-cover object-[center_25%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              </div>

              {/* Connected Floating Cards - Positioned more to the right */}
              <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-8 lg:-right-12 w-[80%] md:w-[40%] lg:w-[40%] xl:w-[38%] flex flex-col">
                {cards.map((card, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
                    style={{
                      marginTop: index === 0 ? '0' : '-1rem',
                      zIndex: 10 - index,
                      backgroundColor: card.color,
                    }}
                  >
                    <div className="p-5 text-white">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-medium mb-1">{card.title}</h4>
                          <p className="text-white/80">{card.description}</p>
                        </div>
                      </div>
                      
                      {/* Connector line to next card */}
                      {index < cards.length - 1 && (
                        <div className="flex justify-center mt-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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