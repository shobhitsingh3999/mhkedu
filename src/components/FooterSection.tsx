"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, ChevronUp } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#0F4C5C] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.jpeg"
                alt="MHK Consultants"
                width={240}
                height={70}
                className="mb-4"
              />
              <p className="text-white/80 text-sm leading-relaxed">
                MHK Consultants: Your trusted partner for seamless visa
                services, expert guidance and personalized support to achieve
                global aspirations.
              </p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-[#F6B84C]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  Study inCanada
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  Study In Australia
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-[#F6B84C]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  Study inUK
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  Study inEurope
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  IELTS
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#F6B84C] mr-2">›</span>
                <Link
                  href="#"
                  className="text-white hover:text-[#0D7377] transition-colors"
                >
                  PTE
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-[#F6B84C]">
              Address
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <span className="ml-3 text-white/90">
                  Mukherjee Nagar Delhi
                </span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <a
                  href="tel:+918368641218"
                  className="ml-3 text-white/90 hover:text-[#F6B84C]"
                >
                  +91 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <a
                  href="mailto:abroaddreams4@gmail.com"
                  className="ml-3 text-white/90 hover:text-[#F6B84C]"
                >
                  info@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex mt-6 gap-3">
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-[#0D7377] transition-colors"
              >
                <Facebook size={18} className="text-[#0F4C5C]" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-[#0D7377] transition-colors"
              >
                <Instagram size={18} className="text-[#0F4C5C]" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-[#0D7377] transition-colors"
              >
                <Youtube size={18} className="text-[#0F4C5C]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#F6B84C] py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#0F4C5C]">
          <div>Copyright © 2024 MHK Consultants, All Rights Reserved.</div>
          <div>
            Website Designed By :{" "}
            <a
              href="https://www.weboptily.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WebOptily.com
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-10 right-10 w-10 h-10 bg-[#F6B84C] rounded-md flex items-center justify-center hover:bg-[#0D7377] transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 text-[#0F4C5C]" />
      </a>
    </footer>
  );
}
