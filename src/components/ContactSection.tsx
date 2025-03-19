"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="relative bg-[#0B3142] overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <BackgroundPattern />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 flex justify-center">
        <div className="max-w-[460px]">
          <h2 className="text-[42px] leading-[1.1] text-white font-normal mb-3">
            Lets Connect!
          </h2>
          <p className="text-white/80 text-base mb-8">
            Maiorum copiosae gubergren ea eam, ocurreret intellegam.<br />
            Laoreet reprimique temporibus.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-md focus:outline-none focus:border-white/40"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-md focus:outline-none focus:border-white/40"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-md focus:outline-none focus:border-white/40"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#9FE870] text-[#0B3142] font-medium px-6 py-3 rounded-md hover:bg-[#8AD95F] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Background Pattern Component
function BackgroundPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      className="opacity-20"
    >
      {/* Abstract Wave Patterns */}
      <path
        d="M-100 600C100 550 300 650 500 600C700 550 900 500 1100 550C1300 600 1500 650 1700 600"
        stroke="#1A5A6E"
        strokeWidth="60"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M-100 400C100 350 300 450 500 400C700 350 900 300 1100 350C1300 400 1500 450 1700 400"
        stroke="#1A5A6E"
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M-100 200C100 150 300 250 500 200C700 150 900 100 1100 150C1300 200 1500 250 1700 200"
        stroke="#1A5A6E"
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Connection Dots */}
      <g className="connection-dots">
        <circle cx="200" cy="200" r="6" fill="#9FE870" />
        <circle cx="400" cy="300" r="6" fill="#9FE870" />
        <circle cx="600" cy="150" r="6" fill="#9FE870" />
        <circle cx="800" cy="250" r="6" fill="#9FE870" />
        <circle cx="1000" cy="200" r="6" fill="#9FE870" />
        <circle cx="1200" cy="300" r="6" fill="#9FE870" />
        
        <circle cx="300" cy="400" r="6" fill="#9FE870" />
        <circle cx="500" cy="500" r="6" fill="#9FE870" />
        <circle cx="700" cy="450" r="6" fill="#9FE870" />
        <circle cx="900" cy="550" r="6" fill="#9FE870" />
        <circle cx="1100" cy="450" r="6" fill="#9FE870" />
        
        <circle cx="200" cy="600" r="6" fill="#9FE870" />
        <circle cx="400" cy="650" r="6" fill="#9FE870" />
        <circle cx="600" cy="600" r="6" fill="#9FE870" />
        <circle cx="800" cy="650" r="6" fill="#9FE870" />
        <circle cx="1000" cy="600" r="6" fill="#9FE870" />
        <circle cx="1200" cy="650" r="6" fill="#9FE870" />
      </g>
      
      {/* Connection Lines */}
      <g className="connection-lines" stroke="#1A5A6E" strokeWidth="1" strokeDasharray="5,5">
        <line x1="200" y1="200" x2="400" y2="300" />
        <line x1="400" y1="300" x2="600" y2="150" />
        <line x1="600" y1="150" x2="800" y2="250" />
        <line x1="800" y1="250" x2="1000" y2="200" />
        <line x1="1000" y1="200" x2="1200" y2="300" />
        
        <line x1="300" y1="400" x2="500" y2="500" />
        <line x1="500" y1="500" x2="700" y2="450" />
        <line x1="700" y1="450" x2="900" y2="550" />
        <line x1="900" y1="550" x2="1100" y2="450" />
        
        <line x1="200" y1="600" x2="400" y2="650" />
        <line x1="400" y1="650" x2="600" y2="600" />
        <line x1="600" y1="600" x2="800" y2="650" />
        <line x1="800" y1="650" x2="1000" y2="600" />
        <line x1="1000" y1="600" x2="1200" y2="650" />
        
        {/* Vertical connections */}
        <line x1="200" y1="200" x2="300" y2="400" />
        <line x1="400" y1="300" x2="500" y2="500" />
        <line x1="600" y1="150" x2="700" y2="450" />
        <line x1="800" y1="250" x2="900" y2="550" />
        <line x1="1000" y1="200" x2="1100" y2="450" />
        
        <line x1="300" y1="400" x2="200" y2="600" />
        <line x1="500" y1="500" x2="400" y2="650" />
        <line x1="700" y1="450" x2="600" y2="600" />
        <line x1="900" y1="550" x2="800" y2="650" />
        <line x1="1100" y1="450" x2="1000" y2="600" />
      </g>
    </svg>
  );
} 