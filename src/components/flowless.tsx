import React from 'react';
import { Users, FileText, ThumbsUp, Layers } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: "1. Consultation",
    description: "Discuss your goals and requirements thoroughly.",
    icon: <Users className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#0F4C5C]",
    iconRingColor: "bg-[#0F4C5C]/10"
  },
  {
    id: 2,
    title: "2. Preparation",
    description: "Prepare and organize all necessary documents.",
    icon: <Layers className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#0D7377]",
    iconRingColor: "bg-[#0D7377]/10"
  },
  {
    id: 3,
    title: "3. Application",
    description: "Submit your application with expert assistance.",
    icon: <FileText className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#0F4C5C]",
    iconRingColor: "bg-[#0F4C5C]/10"
  },
  {
    id: 4,
    title: "4. Approval",
    description: "Receive your visa approval with ease.",
    icon: <ThumbsUp className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#14BDEB]",
    iconRingColor: "bg-[#14BDEB]/10"
  }
];

export default function FlawlessProcessComponent() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4C5C]/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F4C5C]/5 rounded-full -ml-48 -mb-48"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#0F4C5C]/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[#0F4C5C]/10 mb-4">
            <span className="text-sm font-medium text-[#0F4C5C]">Four Simple Steps</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0F4C5C] mb-4">
            Our Flowless Process
          </h2>
          <p className="text-[#0F4C5C]/70 text-lg max-w-3xl mx-auto">
            Our flowless process ensures seamless guidance from consultation to approval,
            simplifying every step to make your immigration journey effortless.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-36 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#0F4C5C] via-[#0D7377] to-[#14BDEB]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center group">
                {/* Icon with rings */}
                <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                  <div className={`absolute inset-0 rounded-full ${step.iconRingColor} -m-6 group-hover:scale-110 transition-all duration-500`}></div>
                  <div className={`relative w-28 h-28 rounded-full ${step.iconRingColor} flex items-center justify-center`}>
                    <div className={`w-20 h-20 rounded-full ${step.iconBgColor} flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step number badge - on mobile only */}
                  <div className="lg:hidden absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-[#0F4C5C]">
                    {step.id}
                  </div>
                </div>
                
                {/* Card container for text content */}
                <div className="bg-white rounded-xl shadow-md p-6 w-full group-hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-xl font-medium text-[#0F4C5C] mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#0F4C5C]/70 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}