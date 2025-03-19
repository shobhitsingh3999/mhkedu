"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Study Visa", href: "/study-visa" },
  { label: "Coaching", href: "/coaching" },
  { label: "Visitor Visa", href: "/vistor-visa" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner with Contact Info and Social Links */}
      <div className="bg-[#0F4C5C] text-white text-sm py-2">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>info@gmail.com</span>
            </div>
            <div className="hidden sm:flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>123 Business Ave, Suite 200, New York, NY</span>
            </div>
            <div className="hidden md:flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-[#9FE870] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4.5 w-4.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/demo" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8h16v16H8V8z" fill="#0F4C5C" />
                <path d="M24 8h-8v8h8V8z" fill="#9FE870" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#0F4C5C]">
              StartPro
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseOver={() => setHoveredPath(item.href)}
                className="relative px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>{item.label}</span>
                {hoveredPath === item.href && (
                  <motion.div
                    className="absolute inset-0 bg-slate-100 rounded-md -z-10"
                    layoutId="navbar-hover"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 15,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="h-9 px-4 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full">
              Free consultation
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
