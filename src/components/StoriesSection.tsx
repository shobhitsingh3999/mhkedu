import Image from "next/image";
import { Check } from "lucide-react";

interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: "green" | "orange";
}

const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Dedicated Client Support",
    description: "Our dedicated support team is always ready to address your questions and provide expert guidance on the best career-oriented preparation options tailored to your goals at Abroad Dreams Consultant.",
    icon: "green"
  },
  {
    id: 2,
    title: "Global Networks",
    description: "We deliver exceptional results globally, guiding individuals with expert immigration solutions to achieve their aspirations both in India and internationally.",
    icon: "orange"
  },
  {
    id: 3,
    title: "Professional Trainer",
    description: "We understand the importance of your educational journey and offer expert trainers to ensure your career advancement through quality learning opportunities.",
    icon: "green"
  },
  {
    id: 4,
    title: "True To Our Value",
    description: "We take pride in offering expert advice, bringing unmatched knowledge and experience to ensure the best outcome for your study and immigration goals.",
    icon: "orange"
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#0F4C5C] relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#14BDEB]/10 rounded-full blur-xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FFF 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <h2 className="text-4xl md:text-5xl text-[#F6B84C] font-normal text-center mb-16">
          Why Choose Us?
        </h2>

        {/* Three-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left column - first 2 items */}
          <div className="space-y-12">
            {whyChooseUsItems.slice(0, 2).map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${
                    item.icon === "green" ? 'bg-[#0D7377]' : 'bg-[#F6B84C]'
                  } flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className={`text-xl font-medium ${
                    item.icon === "green" ? 'text-[#0D7377]' : 'text-[#F6B84C]'
                  }`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Middle column - image */}
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px]">
              <div className="absolute inset-0 rounded-full border-2 border-[#F6B84C]/30"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-[#0D7377]">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
                  alt="Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right column - last 2 items */}
          <div className="space-y-12">
            {whyChooseUsItems.slice(2, 4).map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${
                    item.icon === "green" ? 'bg-[#0D7377]' : 'bg-[#F6B84C]'
                  } flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className={`text-xl font-medium ${
                    item.icon === "green" ? 'text-[#0D7377]' : 'text-[#F6B84C]'
                  }`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}