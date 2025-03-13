"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Shield, Globe, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions for enterprise businesses.",
    features: ["Process Automation", "Legacy Modernization", "Digital Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    color: "from-[#0EA5E9] to-[#2563EB]",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#0EA5E9]"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Comprehensive security solutions for modern enterprises.",
    features: ["Threat Intelligence", "Zero Trust Security", "Compliance Management"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#EC4899] to-[#BE185D]",
    iconBg: "bg-[#FDF2F8]",
    iconColor: "text-[#EC4899]"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for enterprise-level operations.",
    features: ["Cloud Migration", "Infrastructure Optimization", "24/7 Support"],
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#6366F1] to-[#4338CA]",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#6366F1]"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI & Analytics",
    description: "Advanced AI solutions for data-driven decision making.",
    features: ["Predictive Analytics", "Machine Learning", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2069&auto=format&fit=crop",
    color: "from-[#F43F5E] to-[#BE185D]",
    iconBg: "bg-[#FFF1F2]",
    iconColor: "text-[#F43F5E]"
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      
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
              Enterprise Solutions
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-slate-900 block mb-2">Transform Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Business Operations
            </span>
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Leverage our enterprise-grade solutions to streamline operations, enhance security,
            and drive innovation across your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />
                </div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  {/* Icon */}
                  <div className={`relative w-20 h-20 mb-6 rounded-xl ${service.iconBg} transform group-hover:scale-110 transition-transform duration-500`}>
                    <div className={`absolute inset-0 flex items-center justify-center ${service.iconColor}`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 text-lg mb-6 leading-relaxed max-w-lg opacity-90">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-base text-slate-200 opacity-90">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    variant="outline"
                    className="w-fit text-base group/btn border-white/20 hover:border-white/40 hover:bg-white/10 text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
} 