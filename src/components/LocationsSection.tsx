"use client";

import Link from "next/link";

export default function LocationsSection() {
  const locations = [
    {
      city: "Canada",
      address: "17th St, New York, NY 10011",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww')",
      triangleColor: "#D9E6EA",
    },
    {
      city: "United Kingdom (UK)",
      address: "Whitcomb Ct, London W1D 6BP",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000')",
      triangleColor: "#0B3142",
    },
    {
      city: "Austrailia",
      address: "Waterlooplein 1, 1011 NV",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://abroaddreamsconsultant.com/wp-content/uploads/2024/11/pexels-steve-tingley-2172304-15009437-scaled.jpg')",
      triangleColor: "#D9E6EA",
    },
    {
      city: "Europe",
      address: "Seestrasse 21, Zurich, CH",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000')",
      triangleColor: "#0B3142",
    },
    {
      city: "USA",
      address: "Waterlooplein 1, 1011 NV",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#D9E6EA",
      bgImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000')",
      triangleColor: "#D9E6EA",
    },
    {
      city: "New Zealand",
      address: "Seestrasse 21, Zurich, CH",
      phone: "+ 99 11 123 456; + 99 11 123 456",
      email: "startpro@example.com",
      bgColor: "#0B3142",
      bgImage: "url('https://plus.unsplash.com/premium_photo-1682449558329-b04c01db4d42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D')",
      triangleColor: "#0B3142",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
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
    triangleColor: string;
  };
}

function LocationCard({ location }: LocationProps) {
  // Determine text color based on background color
  const isLightBackground = location.bgColor === "#D9E6EA";
  const textColorClass = isLightBackground ? "text-[#0B3142]" : "text-white";
  const textOpacityClass = isLightBackground ? "text-[#0B3142]/80" : "text-white/80";

  return (
    <div className="relative h-[590px] overflow-hidden group">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: location.bgColor,
        }}
      >
        {/* City image - only visible in the triangle cutout */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
          style={{ 
            backgroundImage: location.bgImage,
          }}
        ></div>
        
        {/* Diagonal overlay - covers part of the image */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${location.triangleColor} 0%, ${location.triangleColor} 50%, transparent 50%, transparent 100%)`,
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1 p-10">
          <h3 className={`text-[42px] font-normal ${textColorClass} mb-6`}>{location.city}</h3>
          <div className={`space-y-4 ${textOpacityClass}`}>
            <p>{location.address}</p>
            <p>{location.phone}</p>
            <p className={`hover:${textColorClass} transition-colors`}>
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </p>
          </div>
        </div>
        
        {/* Arrow button */}
        <div className="p-10 mt-auto">
          <Link href="#" className="inline-block">
            <div className={`w-14 h-14 rounded-full border ${isLightBackground ? 'border-[#0B3142]/30' : 'border-white/30'} flex items-center justify-center ${isLightBackground ? 'group-hover:bg-[#0B3142]/10' : 'group-hover:bg-white/10'} transition-colors`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={isLightBackground ? "#0B3142" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 