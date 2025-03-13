"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Users, Target, Award, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#9FE870]/10 rounded-full border border-[#9FE870]/20 text-[#9FE870] mb-6"
            >
              Welcome to StartPro
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-semibold text-white mb-8 leading-tight"
            >
              Transforming Ideas into{" "}
              <span className="text-[#9FE870]">Digital Reality</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/80 mb-12 leading-relaxed"
            >
              We're a team of passionate innovators dedicated to creating exceptional digital experiences that drive business growth and transform industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] px-8 py-6 text-lg rounded-full group">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-[#9FE870]/5 blur-3xl rounded-l-full"></div>
          <div className="absolute right-20 top-20 w-72 h-72 bg-[#9FE870]/10 rounded-full"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0B3142] rounded-tr-full"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-semibold text-[#0F4C5C] mb-6">Our Core Values</h2>
            <p className="text-lg text-[#0F4C5C]/70">Guided by strong principles, we deliver exceptional results that exceed expectations and drive meaningful impact.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#E5F9E0] p-8 rounded-2xl group hover:bg-[#0F4C5C] transition-colors duration-300"
            >
              <div className="bg-[#0F4C5C] group-hover:bg-[#9FE870] w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Target className="w-7 h-7 text-white group-hover:text-[#0F4C5C]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F4C5C] group-hover:text-white mb-4 transition-colors duration-300">Innovation First</h3>
              <p className="text-[#0F4C5C]/80 group-hover:text-white/80 transition-colors duration-300">We push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#E5F9E0] p-8 rounded-2xl group hover:bg-[#0F4C5C] transition-colors duration-300"
            >
              <div className="bg-[#0F4C5C] group-hover:bg-[#9FE870] w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Users className="w-7 h-7 text-white group-hover:text-[#0F4C5C]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F4C5C] group-hover:text-white mb-4 transition-colors duration-300">Client Success</h3>
              <p className="text-[#0F4C5C]/80 group-hover:text-white/80 transition-colors duration-300">Your success is our priority. We work closely with you to achieve and exceed your goals.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#E5F9E0] p-8 rounded-2xl group hover:bg-[#0F4C5C] transition-colors duration-300"
            >
              <div className="bg-[#0F4C5C] group-hover:bg-[#9FE870] w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Award className="w-7 h-7 text-white group-hover:text-[#0F4C5C]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F4C5C] group-hover:text-white mb-4 transition-colors duration-300">Quality Driven</h3>
              <p className="text-[#0F4C5C]/80 group-hover:text-white/80 transition-colors duration-300">We maintain the highest standards in every project, ensuring exceptional results.</p>
            </motion.div>
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#E5F9E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#0F4C5C]/5 rounded-tl-full"></div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#0F4C5C]/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-semibold text-[#0F4C5C] mb-6">Meet Our Leadership</h2>
            <p className="text-lg text-[#0F4C5C]/70">Experienced professionals dedicated to driving innovation and delivering exceptional results.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", image: "/team/sarah.jpg" },
              { name: "Michael Chen", role: "CTO", image: "/team/michael.jpg" },
              { name: "Emma Davis", role: "Design Director", image: "/team/emma.jpg" }
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-[#0F4C5C]/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#9FE870]/20 to-[#0F4C5C]/20 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">{member.name}</h3>
                <p className="text-[#0F4C5C]/60 mb-4">{member.role}</p>
                <Button variant="ghost" className="text-[#0F4C5C] hover:text-[#9FE870] group/btn">
                  View Profile
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#9FE870]/5 rounded-br-full"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0F4C5C]/5 rounded-tl-full"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-[#0F4C5C] relative overflow-hidden">
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
              To empower businesses through innovative digital solutions that drive growth, enhance efficiency, and create lasting impact in an ever-evolving digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button
                className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] px-8 py-6 text-lg rounded-full group"
              >
                Join Our Team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#9FE870]/10 rounded-br-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0B3142] rounded-tl-full"></div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
} 