"use client"

export default function OurPartners() {
  // Sample partners - keep your actual partners
  const partners = [
    {
      id: 1,
      name: "Federation University",
      logo: "/patner/Tech brand.png"
    },
    // {
    //   id: 2,
    //   name: "Coventry University",
    //   logo: "/patner/Tech brand (2).png"
    // },
    {
      id: 3,
      name: "University of the West of England Bristol",
      logo: "/patner/Tech brand (3).png"
    },
    {
      id: 4,
      name: "Oxford University",
      logo: "/patner/Tech brand (4).png"
    },
    {
      id: 5,
      name: "Cambridge University",
      logo: "/patner/Tech brand (5).png"
    },
    // {
    //   id: 6,
    //   name: "Imperial College London",
    //   logo: "/patner/Tech brand (6).png"
    // },
    // {
    //   id: 7,
    //   name: "Harvard University",
    //   logo: "/patner/Tech brand (7).png"
    // },
    {
      id: 8,
      name: "Stanford University",
      logo: "/patner/Tech brand (8).png"
    },
    {
      id: 9,
      name: "MIT",
      logo: "/patner/Tech brand (9).png"
    },
    // {
    //   id: 10,
    //   name: "Princeton University",
    //   logo: "/patner/Tech brand (10).png"
    // }
     {
      id: 11,
      name: "Princeton University",
      logo: "/patner/Tech brand (11).png"
    },
    {
      id: 12,
      name: "Princeton University",
      logo: "/patner/Tech brand (12).png"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top right corner graphic */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20 blur-2xl"></div>
        
        {/* Bottom left corner graphic */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100 rounded-full translate-y-1/2 -translate-x-1/3 opacity-20 blur-2xl"></div>
        
        {/* Center decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-10 rotate-6 scale-150"></div>
        
        {/* Decorative dots pattern */}
        <div className="hidden lg:block absolute top-10 left-10 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4 mb-4">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-full bg-gray-400"></div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:block absolute bottom-10 right-10 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4 mb-4">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-full bg-gray-400"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with decorative elements */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-70"></div>
            <h2 className="text-4xl font-bold text-[#1A2B3C] mb-4">Our Partners</h2>
            <p className="text-[#1A2B3C]/70 max-w-2xl mx-auto leading-relaxed">
              We collaborate with leading organizations around the world to provide exceptional opportunities and services.
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-16 h-16">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-3 bg-blue-200 rounded-full opacity-20 animate-pulse animation-delay-300"></div>
                <div className="absolute inset-6 bg-blue-300 rounded-full opacity-20 animate-pulse animation-delay-600"></div>
              </div>
            </div>
          </div>
          
          {/* Partners Grid with enhanced styling */}
          
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"> */}
            {/* {partners.map((partner) => ( */}
              {/* <div  */}
                {/* key={partner.id}  */}
                {/* className="group flex items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden" */}
              {/* > */}
                {/* Hover effect background */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
                
                {/* Corner accent */}
                {/* <div className="absolute top-0 left-0 w-8 h-8 -translate-x-4 -translate-y-4 bg-blue-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> */}
                
                {/* <img  */}
                  {/* src={partner.logo}  */}
                  {/* alt={`${partner.name} logo`} */}
                  {/* className="max-h-16 max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300" */}
                {/* /> */}
              {/* </div> */}
            {/* ))} */}
          {/* </div> */}




          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
  {/* Wrapper div for centering incomplete rows */}
  <div className="col-span-full flex flex-wrap justify-center gap-6 md:gap-8">
    {partners.map((partner) => (
      <div
        key={partner.id}
        className="group flex items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden w-full sm:w-64"
      >
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 -translate-x-4 -translate-y-4 bg-blue-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-16 max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>


          
          
          {/* Bottom decoration */}
          <div className="flex justify-center mt-16">
            <div className="w-32 h-1 bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}