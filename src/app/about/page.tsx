"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import AnalysisSection from "@/components/AnalysisSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
    <AnalysisSection/>
      {/* Values Section */}
<section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-light text-[#0F4C5C] mb-4">
                Our <span className="text-[#9FE870] font-normal">Journey</span>
              </h2>
              <div className="w-20 h-1 bg-[#F6B84C]"></div>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p>
              Our story began with a simple yet powerful vision — to support students in unlocking global opportunities through education. What started as a small initiative has grown into a trusted consultancy, proudly based in Sydney, Australia, and serving students across the globe.
              </p>
              
              <p>
              In the early stages, our focus was on providing accurate and transparent visa assistance. As we gained trust and witnessed the life-changing impact of international education, our services naturally expanded. Today, we offer end-to-end support — from personalized counseling and university placements to English proficiency test preparation and post-arrival guidance.
              </p>
              
              <p>
              Backed by a team of highly experienced and Qualified Education Counsellors, many of whom have studied or worked internationally themselves, we bring firsthand knowledge and empathy to every student interaction. Our 95% visa grant success rate stands as a testament to our meticulous process and unwavering dedication.
              </p>
              
              <p>
              Over the years, we have built strong relationships with top universities across countries like Australia, the UK, Canada, and the USA — and guided hundreds of students toward their academic and career goals abroad.
              </p>
              
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
              {/* Main image */}
              <Image
                src="https://cdn.pixabay.com/photo/2024/01/22/22/09/map-8526430_1280.jpg"
                alt="Our team's journey"
                fill
                className="object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/30 to-transparent"></div>
              
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#9FE870]/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                <div className="text-[#0F4C5C] font-semibold">Est. 2014</div>
                <div className="text-[#0F4C5C]/70 text-sm">A decade of excellence</div>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -bottom-5 -right-5 w-64 h-64 bg-[#F6B84C]/10 rounded-full -z-10"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 border-2 border-[#9FE870]/30 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
            {/* Stats Grid - First 4 items */}
            <div className="col-span-1 md:border-r border-gray-200 text-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3D7A7A]">8+</h3>
              <p className="text-[#0F4C5C] mt-2 text-sm md:text-base">Visa Categories</p>
            </div>
            
            <div className="col-span-1 md:border-r border-gray-200 text-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F6B84C]">450+</h3>
              <p className="text-[#0F4C5C] mt-2 text-sm md:text-base">Visa Applications</p>
            </div>
            
            <div className="col-span-1 md:border-r border-gray-200 text-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F6B84C]">450+</h3>
              <p className="text-[#0F4C5C] mt-2 text-sm md:text-base">Approvals</p>
            </div>
            
            <div className="col-span-1 md:border-r border-gray-200 text-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3D7A7A]">5</h3>
              <p className="text-[#0F4C5C] mt-2 text-sm md:text-base">Reviews</p>
            </div>
            
            {/* Badge with Years of Experience */}
            <div className="col-span-2 md:col-span-1 flex justify-center items-center mt-6 md:mt-0">
              <div className="bg-[#3D7A7A] rounded-2xl p-4 md:p-6 text-center text-white w-full max-w-[200px] md:max-w-[230px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 mb-2 md:mb-3 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold">10+</h3>
                <p className="mt-1 text-white/90 text-sm md:text-base">Years Of Experience</p>
              </div>
            </div>
          </div>
          
          {/* Trusted Visa Solutions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1 hidden md:block">
              {/* Intentionally left empty for layout balance */}
            </div>
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#3D7A7A] mb-6 md:mb-8">Trusted Visa Solutions</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#3D7A7A] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-gray-700">Expert Guidance You Can Trust</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#3D7A7A] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-gray-700">High Visa Success Rates Guaranteed</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#3D7A7A] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-gray-700">Tailored Solutions for Your Needs</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#3D7A7A] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-gray-700">Transparent and Hassle-Free Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-10 bg-[#0F4C5C] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold text-white mb-8"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-white/80 mb-12 leading-relaxed"
            >
              to provide ethical, student-centric guidance that turns aspirations into achievements. Whether you’re just starting to explore study abroad options or ready to take the leap, we’re here to support you every step of the way.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* <Button
                className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] px-8 py-6 text-lg rounded-full group"
              >
                Join Our Team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </motion.div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#9FE870]/10 rounded-br-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0B3142] rounded-tl-full"></div>
        </div>
      </section>

    </main>
  );
} 