"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Award, Globe, Heart, Target, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    expertise: "Former VP at Fortune 500, led digital transformation initiatives worth $500M+",
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1998&auto=format&fit=crop",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    expertise: "20+ years in enterprise architecture, led cloud migrations for major banks",
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Enterprise Solutions",
    expertise: "Implemented solutions for 200+ enterprise clients globally",
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    gradient: "from-indigo-500 to-blue-500"
  }
];

const achievements = [
  { 
    number: "$2B+", 
    label: "Enterprise Value Delivered", 
    icon: <Target className="h-6 w-6" />,
    description: "Created measurable business impact for our enterprise clients",
    gradient: "from-[#0EA5E9] to-[#2563EB]",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#0EA5E9]"
  },
  { 
    number: "200+", 
    label: "Enterprise Clients", 
    icon: <Heart className="h-6 w-6" />,
    description: "Trusted by leading organizations worldwide",
    gradient: "from-[#EC4899] to-[#BE185D]",
    iconBg: "bg-[#FDF2F8]",
    iconColor: "text-[#EC4899]"
  },
  { 
    number: "20+", 
    label: "Years of Excellence", 
    icon: <Award className="h-6 w-6" />,
    description: "Delivering enterprise solutions since 2004",
    gradient: "from-[#6366F1] to-[#4338CA]",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#6366F1]"
  },
  { 
    number: "40+", 
    label: "Countries Served", 
    icon: <Globe className="h-6 w-6" />,
    description: "Global presence with local expertise",
    gradient: "from-[#F43F5E] to-[#BE185D]",
    iconBg: "bg-[#FFF1F2]",
    iconColor: "text-[#F43F5E]"
  }
];


export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            <span className="px-6 py-2 rounded-full bg-white text-slate-800 text-sm font-medium tracking-wider uppercase">
              Global Leadership
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-slate-900 block mb-2">Enterprise-Grade</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Expertise & Experience
            </span>
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings decades of enterprise experience, having transformed
            businesses across the globe through innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />
                </div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {member.name}
                  </h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} text-xl mb-6 font-semibold`}>
                    {member.role}
                  </p>
                  <p className="text-slate-200 text-lg mb-8 leading-relaxed opacity-90">
                    {member.expertise}
                  </p>
                  <Button
                    variant="outline"
                    className="w-fit text-base group/btn border-white/20 hover:border-white/40 hover:bg-white/10 text-white"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl bg-white shadow-2xl p-16 mb-32"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`relative w-16 h-16 mx-auto mb-6 rounded-xl ${achievement.iconBg} transform group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`absolute inset-0 flex items-center justify-center ${achievement.iconColor}`}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  {achievement.number}
                </div>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} font-semibold mb-4`}>
                  {achievement.label}
                </div>
                <div className="text-slate-600 text-lg">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white border-0 h-14 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 to-transparent" />
    </section>
  );
} 