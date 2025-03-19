"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev === testimonials.length ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSlideChange = (getNextSlide: (prev: number) => number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(getNextSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (slideNumber: number) => {
    handleSlideChange(() => slideNumber);
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev === testimonials.length ? 1 : prev + 1));
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden">
      {/* Study abroad background graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 rotate-12">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="#0B3142">
            <path d="M21,5c-1.1-0.3-2.3-0.5-3.5-0.5c-1.9,0-4.1,0.4-5.5,1.5c-1.4-1.1-3.6-1.5-5.5-1.5S2.5,4.9,1,6v14.7c0,0.6,0.4,1.2,1,1.3c0.2,0,0.4,0,0.6-0.1c1.2-0.5,2.9-0.9,4.4-0.9c1.9,0,4.1,0.4,5.5,1.5c1.4-1.1,3.6-1.5,5.5-1.5c1.5,0,3.2,0.4,4.4,0.9c0.2,0.1,0.4,0.1,0.6,0.1c0.6-0.1,1-0.7,1-1.3V6C22.8,5.6,21.9,5.3,21,5z M21,18.6c-1.1-0.4-2.3-0.6-3.5-0.6c-1.9,0-4.1,0.4-5.5,1.5V8.9c1.4-1.1,3.6-1.5,5.5-1.5c1.2,0,2.4,0.2,3.5,0.6V18.6z"/>
          </svg>
        </div>
        <div className="absolute top-1/4 right-10 -rotate-12">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#9FE870">
            <path d="M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S13.4,11.5,12,11.5z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="#0B3142">
            <path d="M12.1,6.9L4.5,14.5C4.2,14.8,4,15.1,4,15.5v4C4,20.3,4.7,21,5.5,21l0,0h4c0.4,0,0.7-0.1,1-0.4l7.6-7.6c0.6-0.6,0.6-1.5,0-2.1 l-3.9-3.9C13.6,6.3,12.6,6.3,12.1,6.9z M7.5,19C6.7,19,6,18.3,6,17.5S6.7,16,7.5,16S9,16.7,9,17.5S8.3,19,7.5,19z M16.7,5.3 l-3.9-3.9c-0.6-0.6-1.5-0.6-2.1,0l-2,2c-0.6,0.6-0.6,1.5,0,2.1l3.9,3.9c0.6,0.6,1.5,0.6,2.1,0l2-2C17.3,6.9,17.3,5.9,16.7,5.3z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 rotate-45">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="#F6B84C">
            <path d="M17.6,11.4c0-1-0.8-1.9-1.8-1.9H17c-0.2-1.3-0.7-2.5-1.4-3.5l0.7-0.7c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-0.7,0.7 c-1-0.7-2.2-1.2-3.5-1.4V1.8C9.4,0.8,8.6,0,7.6,0S5.7,0.8,5.7,1.8v0.8c-1.3,0.2-2.5,0.7-3.5,1.4L1.4,3.4c-0.8-0.8-2-0.8-2.8,0 c-0.8,0.8-0.8,2,0,2.8l0.7,0.7C-1.2,8,-1.7,9.2-1.9,10.4h-0.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.9,1.8,1.9h0.8 c0.2,1.3,0.7,2.5,1.4,3.5l-0.7,0.7c-0.8,0.8-0.8,2,0,2.8c0.8,0.8,2,0.8,2.8,0l0.7-0.7c1,0.7,2.2,1.2,3.5,1.4v0.8 c0,1,0.8,1.8,1.8,1.8s1.9-0.8,1.9-1.8v-0.8c1.3-0.2,2.5-0.7,3.5-1.4l0.7,0.7c0.8,0.8,2,0.8,2.8,0c0.8-0.8,0.8-2,0-2.8l-0.7-0.7 c0.7-1,1.2-2.2,1.4-3.5h0.8C16.8,13.2,17.6,12.4,17.6,11.4z M7.6,16.1c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7 S10.2,16.1,7.6,16.1z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/3 -rotate-12">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="#0D7377">
            <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z M6,10h2v2H6V10z M6,14h8v2H6V14z M16,14h2v2h-2V14z M10,10h8v2h-8V10z"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3142] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#9FE870] mx-auto mb-4"></div>
          <p className="text-[#0B3142]/70 max-w-xl mx-auto">
            Real stories from our clients who have experienced remarkable results with our services
          </p>
        </div>

        {/* Enhanced testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          {/* Main testimonial cards */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9FE870]/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0B3142]/5 rounded-full -ml-20 -mb-20"></div>
              
              {/* Cards container with fixed height */}
              <div className="relative h-[400px] md:h-[320px] overflow-hidden">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out transform ${
                      currentSlide === testimonial.id 
                        ? 'opacity-100 translate-x-0' 
                        : currentSlide > testimonial.id 
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-[#9FE870] opacity-80" />
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="text-xl md:text-2xl text-[#0B3142] leading-relaxed mb-8 flex-grow">
                        {testimonial.content}
                      </p>
                      
                      {/* Author info with improved layout */}
                      <div className="flex items-center">
                        <div className="mr-4 relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#9FE870]/20">
                            <Image 
                              src={testimonial.author.image}
                              alt={testimonial.author.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#9FE870] rounded-full flex items-center justify-center">
                            <Quote className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-[#0B3142] font-bold text-lg">
                            {testimonial.author.name}
                          </div>
                          <div className="text-[#0B3142]/70">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons positioned over the card edges */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white rounded-full p-4 shadow-lg hover:bg-[#9FE870]/10 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ArrowLeft className="w-5 h-5 text-[#0B3142]" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white rounded-full p-4 shadow-lg hover:bg-[#9FE870]/10 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ArrowRight className="w-5 h-5 text-[#0B3142]" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex items-center justify-center mt-10 gap-3">
            {testimonials.map((t) => (
              <button
                key={t.id}
                onClick={() => goToSlide(t.id)}
                className={`transition-all duration-300 focus:outline-none ${
                  currentSlide === t.id
                    ? "w-10 h-3 bg-[#9FE870] rounded-full"
                    : "w-3 h-3 bg-[#0B3142]/20 rounded-full hover:bg-[#0B3142]/40"
                }`}
                aria-label={`Go to testimonial ${t.id}`}
                disabled={isAnimating}
              >
                <span className="sr-only">{t.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}