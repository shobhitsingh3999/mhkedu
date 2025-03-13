import { Button } from "@/components/ui/button";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 stroke-[#0F4C5C]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L19.2 12.8L28 16L19.2 19.2L16 28L12.8 19.2L4 16L12.8 12.8L16 4Z" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Build a better future for your company",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt."
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-[#0F4C5C]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8h16M8 16h16M8 24h16" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Achieve great success with our expertise",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt."
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-[#0F4C5C]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="4" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="8" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="12" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Trusted by over 10,000 clients and agencies",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt."
  },
  {
    icon: (
      <svg className="w-8 h-8 stroke-[#0F4C5C]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26L16 16L26 26M6 16L16 6L26 16" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Take control and learn about your finances",
    description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left side - Heading and Button */}
          <div className="lg:w-[40%] flex flex-col">
            <h2 className="text-[56px] leading-[1.1] font-medium text-[#0F4C5C] mb-8">
              Expert Advisory for Maximum Returns
            </h2>
            <Button
              className="w-fit h-12 px-8 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full text-base"
            >
              Try free version
            </Button>
          </div>

          {/* Right side - Features Grid */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4">
                {feature.icon}
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