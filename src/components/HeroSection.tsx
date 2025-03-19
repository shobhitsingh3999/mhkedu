"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden  pt-16 pb-8 ">
      {/* Background Video - Fixed to cover 80% of screen height */}
      <div className="absolute inset-0 w-full h-[80vh] overflow-hidden rounded-b-full py-1">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C5C]/60 to-[#0F4C5C]/40"></div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9FE870] opacity-40 blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#0F4C5C] opacity-20 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 h-[80vh] flex flex-col justify-center items-center">
        <div className="text-center max-w-3xl mx-auto">
          {/* Centered Content */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[3.5rem] leading-[1.1] lg:text-[5.5rem] font-medium tracking-tight text-[#9FE870] text-center"
          >
            Your Gateway to{" "}
            <span className="block">a Global Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto text-center "
          >
           Shaping Futures, One Dream at a Time – Your Trusted Partner for Study Visas, Visitor Visas and Language Coaching Worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="h-14 px-8 text-lg bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full"
            >
              Free consultation
            </Button>
            
            {/* About Us Button - Outlined with hover effect */}
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full"
            >
              About Us
            </Button>
            
            {/* Contact Us Button - Outlined with hover effect */}
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}