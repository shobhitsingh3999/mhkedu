"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Earum ac risus iis diam, purus sociis patiebatur elit, nec se hic quos magister instantiae.",
    author: {
      name: "Diane Miller",
      role: "Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
    }
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, cons ctetur adipiscing elit, sed do eiu smod tempor incididunt labore.",
    author: {
      name: "Oliver Maltais",
      role: "Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
    }
  },
  {
    id: 3,
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    author: {
      name: "Michael Chen",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
    }
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  return (
    <section className="relative">
      {/* Background split */}
      <div className="absolute inset-0">
        <div className="flex h-full">
          <div className="w-1/2 bg-[#0B3142]"></div>
          <div className="w-1/2 bg-[#F4F4F4]"></div>
        </div>
      </div>

      {/* Quote mark */}
      <div className="absolute left-[15%] bottom-[-80px] z-10">
        <span className="text-[400px] leading-none font-serif text-[#9FE870] opacity-20">
          "
        </span>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-2 gap-0">
            {/* Left content */}
            <div className="pr-16">
              <h2 className="text-[52px] font-normal text-white leading-[1.1] mb-8">
                Our <span className="text-[#9FE870]">Clients' Results</span><br />
                Speak for Themselves
              </h2>
              <p className="text-lg text-white/70 max-w-[480px] mb-12">
                Usu no voluptaria omittantur persequeris, quaeque vituperata, ferri possit.
              </p>
              <button className="text-white border border-white/20 rounded-full px-8 py-4 hover:bg-white/10 transition-colors text-sm">
                View all testimonials
              </button>
            </div>

            {/* Right content */}
            <div className="flex items-center justify-center">
              <div className="max-w-[480px]">
                {/* Testimonial card */}
                <div className="bg-white rounded-lg p-8 shadow-lg relative">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className={`${currentSlide === testimonial.id ? 'block' : 'hidden'}`}
                    >
                      <p className="text-[19px] text-[#0B3142] leading-[1.5] mb-8">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100">
                          <img 
                            src={testimonial.author.image}
                            alt={testimonial.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-[#0B3142] font-medium">
                            {testimonial.author.name}
                          </div>
                          <div className="text-[#0B3142] text-sm">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button 
                    onClick={prevSlide}
                    className="text-[#0B3142]"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    {testimonials.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => goToSlide(t.id)}
                        className={`${
                          currentSlide === t.id
                            ? "text-[#0B3142]"
                            : "text-[#0B3142]/40"
                        }`}
                        aria-label={`Go to testimonial ${t.id}`}
                      >
                        {t.id}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="text-[#0B3142]"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 