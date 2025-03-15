import React from 'react';
import { Users, FileText, ThumbsUp, Layers } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: "1. Consultation",
    description: "Discuss your goals and requirements thoroughly.",
    icon: <Users className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#2F7A6D]",
    iconRingColor: "bg-[#F6D089]/0"
  },
  {
    id: 2,
    title: "2. Preparation",
    description: "Prepare and organize all necessary documents.",
    icon: <Layers className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#F6B84C]",
    iconRingColor: "bg-[#F6D089]/30"
  },
  {
    id: 3,
    title: "3. Application",
    description: "Submit your application with expert assistance.",
    icon: <FileText className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#2F7A6D]",
    iconRingColor: "bg-[#F6D089]/0"
  },
  {
    id: 4,
    title: "4. Approval",
    description: "Receive your visa approval with ease.",
    icon: <ThumbsUp className="w-10 h-10 text-white" />,
    iconBgColor: "bg-[#F6B84C]",
    iconRingColor: "bg-[#F6D089]/30"
  }
];

export default function FlowlessProcessComponent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium text-[#2F7A6D] text-center mb-4">
          Our Flowless Process
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-20">
          Our flawless process ensures seamless guidance from consultation to approval,
          simplifying every step to make your immigration journey effortless.
        </p>

        <div className="relative">
          {/* Connecting line */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Icon with rings */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 -m-6"></div>
                  <div className={`w-28 h-28 rounded-full ${step.iconRingColor} flex items-center justify-center`}>
                    <div className={`w-20 h-20 rounded-full ${step.iconBgColor} flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                {/* Text content */}
                <h3 className="text-2xl font-medium text-[#2F7A6D] mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}