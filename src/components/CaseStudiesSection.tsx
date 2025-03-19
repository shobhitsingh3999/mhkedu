"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  stats: {
    title: string;
    value: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "Liquidity management – set up and growth",
    stats: [
      { title: "Growth", value: "48%" },
      { title: "Revenue", value: "62%" },
      { title: "Profit", value: "87%" }
    ]
  },
  {
    id: "02",
    title: "Banking with Artificial Intelligence",
    stats: [
      { title: "AI Accuracy", value: "92%" },
      { title: "Efficiency", value: "78%" },
      { title: "Cost Reduction", value: "45%" }
    ]
  },
  {
    id: "03",
    title: "Working in worldwide markets",
    stats: [
      { title: "Markets", value: "24+" },
      { title: "Growth", value: "55%" },
      { title: "Coverage", value: "80%" }
    ]
  },
  {
    id: "04",
    title: "Strategic planning for optimal growth",
    stats: [
      { title: "ROI", value: "75%" },
      { title: "Success Rate", value: "89%" },
      { title: "Adoption", value: "92%" }
    ]
  },
  {
    id: "05",
    title: "Ready to see yourself in a new way?",
    stats: [
      { title: "Innovation", value: "95%" },
      { title: "Satisfaction", value: "88%" },
      { title: "Growth", value: "72%" }
    ]
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="relative">
          {/* Case Studies List */}
          <div className="lg:max-w-[90%] lg:pl-12">
            <h2 className="text-[42px] text-[#0F4C5C] font-normal mb-6">
              Case studies and projects
            </h2>
            <p className="text-lg text-[#0F4C5C]/70 max-w-[480px] mb-16">
              Lorem ipsum dolor sit amet, sit no errem latine in adipiscing concludaturquem qui ut qui nihil.
            </p>
            {caseStudies.map((study) => (
              <Link 
                href="#" 
                key={study.id}
                className="group block relative border-b border-[#0F4C5C]/10"
              >
                <div className="flex items-center justify-between py-7 pr-8">
                  <div className="flex items-center">
                    <span className="text-[#0F4C5C]/40 text-[15px] w-[50px]">
                      {study.id}
                    </span>
                    <h3 className="text-[19px] text-[#0F4C5C] font-normal">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full border border-[#0F4C5C]/10 flex items-center justify-center group-hover:bg-white transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-[#0F4C5C] opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Hover Stats Box */}
                  <div className="absolute right-64 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-[252px] h-[162px] bg-[#0F4C5C] rounded-lg p-5 transform group-hover:-rotate-5 transition-all duration-300 shadow-xl">
                      <div className="text-white text-sm mb-3">Money traffic</div>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {study.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-[#9FE870] text-xl font-medium mb-0.5">
                              {stat.value}
                            </div>
                            <div className="text-white/70 text-[10px]">
                              {stat.title}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2 px-[-8px]">
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden w-[240px] -ml-3">
                          <div className="h-full w-[70%] bg-[#9FE870] rounded-full" />
                        </div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden w-[240px] -ml-3">
                          <div className="h-full w-[85%] bg-[#9FE870] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 