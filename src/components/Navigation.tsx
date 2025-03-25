"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Study Visa", href: "/visa" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <span>+91 1234567890</span>
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-20 ">
              {" "}
              <img
                src="/logo.jpeg"
                alt="mhk"
                width={128}
                height={128}
              />{" "}
            </div>
            {/* <span className="text-xl font-semibold text-[#0F4C5C]">
              StartPro
            </span> */}
          </Link>

          {/* Desktop Navigation Links */}
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
            <Button className="hidden sm:inline-flex h-9 px-4 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full">
              Free consultation
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md ${
                      pathname === item.href
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-2 h-10 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full">
                  Free consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
