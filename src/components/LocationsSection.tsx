"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function LocationsSection() {
  const locations = [
    {
      city: "Canada",
      address: "17th St, New York, NY 10011",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww')",
    },
    {
      city: "United Kingdom (UK)",
      address: "Whitcomb Ct, London W1D 6BP",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000')",
    },
    {
      city: "Australia",
      address: "Waterlooplein 1, 1011 NV",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://abroaddreamsconsultant.com/wp-content/uploads/2024/11/pexels-steve-tingley-2172304-15009437-scaled.jpg')",
    },
    {
      city: "Europe",
      address: "Seestrasse 21, Zurich, CH",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000')",
    },
    {
      city: "USA",
      address: "Waterlooplein 1, 1011 NV",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000')",
    },
    {
      city: "New Zealand",
      address: "Seestrasse 21, Zurich, CH",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://plus.unsplash.com/premium_photo-1682449558329-b04c01db4d42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D')",
    },
  ];

  // Refs for carousel
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Auto-play functionality for mobile
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === locations.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isMobile, locations.length]);

  // Scroll to correct slide when index changes
  useEffect(() => {
    if (carouselRef.current && isMobile) {
      const scrollPosition = currentIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMobile]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-16 bg-gray-50 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B3142]/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B3142]/5 rounded-full -ml-48 -mb-48"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B3142]/5">
          <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B3142]/5">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1 rounded-full bg-[#0B3142]/10 mb-4">
            <span className="text-sm font-medium text-[#0B3142]">Global Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3142] mb-4">Our Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our offices around the world and connect with our local experts for personalized guidance
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden md:block">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B3142]/20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
              <path d="M12 2 L12 22" stroke="currentColor" strokeWidth="1" />
              <path d="M2 12 L22 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden md:block">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B3142]/20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
              <path d="M12 2 L12 22" stroke="currentColor" strokeWidth="1" />
              <path d="M2 12 L22 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="min-w-full w-full flex-shrink-0 snap-center px-4"
              >
                <LocationCard location={location} />
              </div>
            ))}
          </div>
          
          {/* Carousel controls */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white text-[#0B3142] border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-1">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-[#0B3142]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white text-[#0B3142] border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface LocationProps {
  location: {
    city: string;
    address: string;
    phone: string;
    email: string;
    bgColor: string;
    bgImage: string;
  };
}

function LocationCard({ location }: LocationProps) {
  // Determine text color based on background color
  const isLightBackground = location.bgColor === "#D9E6EA";
  const textColorClass = isLightBackground ? "text-[#0B3142]" : "text-white";
  
  return (
    <div className="h-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image section */}
      <div 
        className="h-64 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: location.bgImage }}
      >
        {/* Overlay to enhance image visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 backdrop-blur-sm"></div>
          <svg className="absolute top-8 left-8 w-32 h-32 text-white/10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        {/* City name */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="inline-block bg-white/85 backdrop-blur-md rounded-lg px-5 py-3 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0B3142]">{location.city}</h3>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div 
        className="p-6 relative"
        style={{ backgroundColor: location.bgColor }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, ${isLightBackground ? '#0B3142' : '#FFFFFF'} 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className={`space-y-4 ${textColorClass}`}>
          <div className="flex items-start gap-3">
            <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${textColorClass}`} />
            <p>{location.address}</p>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className={`w-5 h-5 mt-0.5 flex-shrink-0 ${textColorClass}`} />
            <p>{location.phone}</p>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className={`w-5 h-5 mt-0.5 flex-shrink-0 ${textColorClass}`} />
            <a 
              href={`mailto:${location.email}`} 
              className="hover:underline transition-colors"
            >
              {location.email}
            </a>
          </div>
        </div>
        
        {/* Button */}
        <div className="mt-6">
          <Link 
            href="#" 
            className={`
              inline-flex items-center gap-2 rounded-full px-5 py-2
              ${isLightBackground 
                ? 'bg-[#0B3142] text-white hover:bg-[#0B3142]/90' 
                : 'bg-white text-[#0B3142] hover:bg-white/90'} 
              transition-colors shadow-md
            `}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// CSS helper to hide scrollbar (add to your global CSS if needed)
const scrollbarHideCSS = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;