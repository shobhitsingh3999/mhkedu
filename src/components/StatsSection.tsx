"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    number: "Professional Team",
    label: "Experienced Experts Dedicated to Your",
    subLabel: "Immigration Success and Support.",
    bgColor: "bg-[#0F4C5C]",
    image: null,
    decorativeElements: [
      {
        color: "bg-[#E5F9E0]",
        size: "w-16 h-16",
        position: "bottom-10 right-10",
        opacity: "opacity-30",
      },
      {
        color: "bg-[#9FE870]",
        size: "w-20 h-20",
        position: "bottom-20 right-20",
        opacity: "opacity-20",
      },
    ],
  },
  {
    number: "Standard Of Excellence",
    label: "Commitment to Quality, Expertise,",
    subLabel: "Integrity and Client Success.",
    bgColor: "bg-[#E5F9E0]",
    textColor: "text-[#0F4C5C]",
    image: null,
    decorativeElements: [
      {
        color: "bg-white",
        size: "w-96 h-96",
        position: "bottom-0 -right-48 rotate-45",
        opacity: "opacity-10",
      },
    ],
  },
  {
    number: "Personalised service",
    label: "Tailored solutions designed to meet",
    subLabel: "your unique immigration needs.",
    bgColor: "bg-[#0F4C5C]",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    decorativeElements: [
      {
        color: "bg-[#0F4C5C]",
        size: "w-full h-full",
        position: "top-0",
        opacity: "opacity-70",
      },
    ],
  },
];

export default function StatsCards() {
  return (
    <section className="w-full px-4 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group overflow-hidden ${stat.bgColor} rounded-xl shadow-lg cursor-pointer`}
          >
            {/* Background Image if exists */}
            {stat.image && (
              <div className="absolute inset-0">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C5C] via-transparent to-transparent opacity-90" />
              </div>
            )}

            {/* Decorative Elements */}
            {stat.decorativeElements?.map((element, i) => (
              <div
                key={i}
                className={`absolute ${element.color} ${element.size} ${element.position} ${element.opacity} transition-transform duration-700 ease-out group-hover:scale-110`}
              />
            ))}

            {/* Content */}
            <div className="relative h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-48 sm:min-h-56 md:min-h-64">
              <div>
                <motion.h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-medium ${
                    stat.textColor || "text-white"
                  } tracking-tight`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className={`text-base sm:text-xl lg:text-2xl mt-2 sm:mt-3 font-medium leading-tight ${
                    stat.textColor || "text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {stat.label}
                </motion.p>
                <motion.p
                  className={`text-base sm:text-xl lg:text-2xl leading-tight ${
                    stat.textColor || "text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {stat.subLabel}
                </motion.p>
              </div>

              {/* Arrow Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border ${
                  stat.textColor ? "border-[#0F4C5C]" : "border-white"
                } flex items-center justify-center group/btn mt-4 sm:mt-6`}
              >
                <ArrowUpRight
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    stat.textColor || "text-white"
                  } transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1`}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}