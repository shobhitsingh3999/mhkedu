"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-[#001219] to-[#0B3142]">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-[42px] leading-tight text-white font-normal mb-6 md:mb-0">
            Get started with StartPro
          </h2>
          <Link 
            href="#" 
            className="bg-[#0B3142] text-white border border-white/20 rounded-full px-8 py-4 hover:bg-[#0B3142]/80 transition-colors"
          >
            Free consultation
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-14">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-14">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="mr-3">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0L21.3333 5.33333L16 10.6667L10.6667 5.33333L16 0Z" fill="#9FE870"/>
                  <path d="M26.6667 10.6667L32 16L26.6667 21.3333L21.3333 16L26.6667 10.6667Z" fill="#9FE870"/>
                  <path d="M10.6667 21.3333L16 26.6667L10.6667 32L5.33333 26.6667L10.6667 21.3333Z" fill="#9FE870"/>
                  <path d="M0 10.6667L5.33333 16L0 21.3333L5.33333 26.6667L10.6667 21.3333L16 26.6667L21.3333 21.3333L16 16L21.3333 10.6667L16 5.33333L10.6667 10.6667L5.33333 5.33333L0 10.6667Z" fill="#9FE870"/>
                </svg>
              </div>
              <span className="text-white text-2xl font-semibold">StartPro</span>
            </div>
            <p className="text-white/60 text-sm">
              © 2025 Qode Interactive, All Rights Reserved
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-white">
            <div className="flex items-center mb-3">
              <svg className="mr-2 text-[#9FE870]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 3.33334H3.33334C2.41667 3.33334 1.67501 4.08334 1.67501 5.00001L1.66667 15C1.66667 15.9167 2.41667 16.6667 3.33334 16.6667H16.6667C17.5833 16.6667 18.3333 15.9167 18.3333 15V5.00001C18.3333 4.08334 17.5833 3.33334 16.6667 3.33334ZM16.6667 6.66668L10 10.8333L3.33334 6.66668V5.00001L10 9.16668L16.6667 5.00001V6.66668Z" fill="currentColor"/>
              </svg>
              <a href="mailto:startpro@example.com" className="hover:text-[#9FE870] transition-colors text-base">
                startpro@example.com
              </a>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 text-[#9FE870]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.66666C6.05 1.66666 2.5 5.21666 2.5 9.16666C2.5 14.1667 10 18.3333 10 18.3333C10 18.3333 17.5 14.1667 17.5 9.16666C17.5 5.21666 13.95 1.66666 10 1.66666ZM10 11.6667C8.625 11.6667 7.5 10.5417 7.5 9.16666C7.5 7.79166 8.625 6.66666 10 6.66666C11.375 6.66666 12.5 7.79166 12.5 9.16666C12.5 10.5417 11.375 11.6667 10 11.6667Z" fill="currentColor"/>
              </svg>
              <span className="text-base">Madison Avenue 21, New York, USA</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-14"></div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-medium mb-5">Subscribe to our newsletter</h3>
            <div className="flex border-b border-white/20 pb-2 mb-6">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="bg-transparent text-white w-full focus:outline-none text-base"
              />
              <button className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B3142] flex items-center justify-center text-white hover:bg-[#9FE870] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 1.66666H6.66675C3.91675 1.66666 1.66675 3.91666 1.66675 6.66666V13.3333C1.66675 16.0833 3.91675 18.3333 6.66675 18.3333H13.3334C16.0834 18.3333 18.3334 16.0833 18.3334 13.3333V6.66666C18.3334 3.91666 16.0834 1.66666 13.3334 1.66666ZM10.0001 14.1667C7.70008 14.1667 5.83341 12.3 5.83341 10C5.83341 7.7 7.70008 5.83333 10.0001 5.83333C12.3001 5.83333 14.1667 7.7 14.1667 10C14.1667 12.3 12.3001 14.1667 10.0001 14.1667ZM14.1667 6.66666C13.5001 6.66666 12.9167 6.08333 12.9167 5.41666C12.9167 4.75 13.5001 4.16666 14.1667 4.16666C14.8334 4.16666 15.4167 4.75 15.4167 5.41666C15.4167 6.08333 14.8334 6.66666 14.1667 6.66666Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B3142] flex items-center justify-center text-white hover:bg-[#9FE870] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0001 1.66666C5.39758 1.66666 1.66675 5.39749 1.66675 10C1.66675 14.6025 5.39758 18.3333 10.0001 18.3333C14.6026 18.3333 18.3334 14.6025 18.3334 10C18.3334 5.39749 14.6026 1.66666 10.0001 1.66666ZM13.3834 7.19999C13.3918 7.28333 13.3918 7.37499 13.3918 7.46249C13.3918 10.0958 11.4126 13.125 7.74591 13.125C6.66675 13.125 5.66675 12.8125 4.81675 12.2792C4.97508 12.2958 5.12508 12.3042 5.28758 12.3042C6.17508 12.3042 6.99175 12.0042 7.65841 11.5C6.82508 11.4833 6.12091 10.9333 5.87508 10.1667C6.17508 10.2167 6.44591 10.2167 6.75425 10.1333C6.32967 10.0435 5.95326 9.82776 5.68247 9.51692C5.41169 9.20608 5.26235 8.81812 5.26258 8.41666V8.39166C5.52091 8.53333 5.82091 8.61666 6.13341 8.62916C5.87511 8.45812 5.66291 8.22588 5.51614 7.95343C5.36937 7.68098 5.29317 7.37783 5.29425 7.06999C5.29425 6.71666 5.38341 6.39166 5.54175 6.10833C6.00961 6.68497 6.59457 7.15742 7.25675 7.49525C7.91893 7.83309 8.64412 8.02903 9.38758 8.06666C9.12091 6.89166 9.99591 5.94166 11.0501 5.94166C11.5501 5.94166 12.0001 6.14999 12.3251 6.48333C12.7251 6.40833 13.1084 6.25833 13.4501 6.05833C13.3084 6.46666 13.0251 6.81666 12.6501 7.03333C13.0168 6.99166 13.3668 6.89166 13.6918 6.75833C13.4501 7.11666 13.1418 7.43333 12.7918 7.68333C13.3834 7.19999 13.3834 7.19999 13.3834 7.19999Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B3142] flex items-center justify-center text-white hover:bg-[#9FE870] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 2.5H3.33341C2.41675 2.5 1.67508 3.25 1.67508 4.16667V15.8333C1.67508 16.75 2.41675 17.5 3.33341 17.5H16.6667C17.5834 17.5 18.3334 16.75 18.3334 15.8333V4.16667C18.3334 3.25 17.5834 2.5 16.6667 2.5ZM6.67508 15.8333H4.16675V8.33333H6.67508V15.8333ZM5.41675 7.25C4.65841 7.25 4.04175 6.63333 4.04175 5.875C4.04175 5.11667 4.65841 4.5 5.41675 4.5C6.17508 4.5 6.79175 5.11667 6.79175 5.875C6.79175 6.63333 6.17508 7.25 5.41675 7.25ZM15.8334 15.8333H13.3334V11.875C13.3334 11 13.3334 9.83333 12.0834 9.83333C10.8334 9.83333 10.6667 10.8333 10.6667 11.875V15.8333H8.16675V8.33333H10.5834V9.41667H10.6167C10.9501 8.8 11.7167 8.15 12.9167 8.15C15.4501 8.15 15.8334 9.83333 15.8334 12V15.8333Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B3142] flex items-center justify-center text-white hover:bg-[#9FE870] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0001 1.66666C5.40008 1.66666 1.66675 5.39999 1.66675 10C1.66675 14.6 5.40008 18.3333 10.0001 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 10C18.3334 5.39999 14.6001 1.66666 10.0001 1.66666ZM10.8334 14.1667H9.16675V9.16666H10.8334V14.1667ZM10.8334 7.49999H9.16675V5.83332H10.8334V7.49999Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="pl-8">
            <h3 className="text-white text-lg font-medium mb-5">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Finance knowledge</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Market research</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Steps for 2025</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Risk advisory</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="pl-8">
            <h3 className="text-white text-lg font-medium mb-5">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Startpro application</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Startpro software</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Money transfer</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Digital payments</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="pl-8">
            <h3 className="text-white text-lg font-medium mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Our Experts</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Our Resources</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-base">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="flex justify-end px-6 pb-6">
        <a 
          href="#top" 
          className="w-12 h-12 rounded-full bg-[#0B3142] flex items-center justify-center text-white hover:bg-[#9FE870] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </footer>
  );
} 