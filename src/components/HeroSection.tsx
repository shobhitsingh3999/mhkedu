"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-12 md:pt-16 pb-6 md:pb-8">
      {/* Background Video - Responsive height adjustment */}
      <div className="absolute inset-0 w-full h-[90vh] md:h-[80vh] overflow-hidden md:rounded-b-full py-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
        >
          {/* Replace with your own video URL that isn't expired */}
          <source
            src="https://videocdn.cdnpk.net/videos/ec09c2b8-2353-4aec-bc59-2bdc0502d1b8/horizontal/previews/clear/large.mp4?token=exp=1742029165~hmac=ae78db857af579c911a91c6dad04e75804723a76459c131856ba32808b2d2c8e"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gradient - Adjusted for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C5C]/70 to-[#0F4C5C]/50"></div>
        {/* Decorative Elements - Adjusted for mobile */}
        <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#9FE870] opacity-40 blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-16 md:w-24 h-16 md:h-24 bg-[#0F4C5C] opacity-20 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 h-[90vh] md:h-[80vh] flex flex-col justify-center items-center">
        <div className="text-center max-w-full sm:max-w-3xl mx-auto">
          {/* Responsive heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight text-[#9FE870] text-center leading-[1.1]"
          >
            Your Gateway to{" "}
            <span className="block">a Global Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-slate-200 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-center"
          >
           Shaping Futures, One Dream at a Time – Your Trusted Partner for Study Visas, Visitor Visas and Language Coaching Worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full"
            >
              Free consultation
            </Button>
            
            {/* About Us Button - Responsive sizing */}
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full mt-3 sm:mt-0"
            >
              About Us
            </Button>
            
            {/* Contact Us Button - Responsive sizing */}
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full mt-3 sm:mt-0"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}