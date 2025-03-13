"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod?",
    answer: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    question: "Ut enim ad minim veniam quis nostrud exercitation ullamco?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    question: "Excepteur sint occaecat cupidatat non provident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number>(1);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? 0 : id);
  };

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <h2 className="text-[42px] text-[#0B3142] font-normal mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-[900px] mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className={`mb-4 rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.06)] overflow-hidden ${
                openFAQ === faq.id ? "bg-[#F7F7F7]" : "bg-white"
              }`}
            >
              <button
                className={`w-full flex items-center justify-between py-6 px-8 text-left transition-colors ${
                  openFAQ === faq.id ? "bg-[#F7F7F7]" : "hover:bg-[#FAFAFA]"
                }`}
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <h3 className="text-[18px] text-[#0B3142] font-medium">
                  {faq.id}. {faq.question}
                </h3>
                <span className={`ml-4 flex-shrink-0 ${openFAQ === faq.id ? "text-[#0B3142]" : "text-[#0B3142]/60"}`}>
                  {openFAQ === faq.id ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ${
                  openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-8 pb-6 border-t border-gray-200 bg-[#F7F7F7]">
                  <p className="text-[#0B3142]/80 text-base leading-relaxed pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 