'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";


// Define types for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Define types for form status
interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Your message has been sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Something went wrong. Please try again later.' }
        });
      }
    } catch (error) {
      console.error(error)
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please check your network connection and try again.' }
      });
    }
  };

  // Define type for contact information items
  interface ContactItem {
    icon: React.ReactNode;
    title: string;
    info: string;
    subInfo: string;
  }

  // Create contact information array
  const contactItems: ContactItem[] = [
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      info: "info@mhkeducationconsultant.com",
      subInfo: "We'll respond within 24 hours"
    },
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      info: "+61 452 507 091",
      subInfo: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      info: "Sydney Australia",
      subInfo: "Get directions"
    },
    {
      icon: <Clock size={20} />,
      title: "Business Hours",
      info: "Monday to Friday: 9:00 AM - 6:00 PM",
      subInfo: "Saturday: 10:00 AM - 4:00 PM (By appointment)"
    },
  ];

  // Define type for FAQ items
  interface FAQItem {
    question: string;
    answer: string;
  }

  // Create FAQ array
  const faqItems: FAQItem[] = [
    {
      question: "How quickly can I expect a response after contacting you?",
      answer: "We strive to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly."
    },
    {
      question: "Do I need to make an appointment before visiting your office?",
      answer: "While walk-ins are welcome during regular business hours, we recommend scheduling an appointment to ensure that a consultant will be available to assist you without waiting."
    },
    {
      question: "Can I get a consultation over video call?",
      answer: "Yes, we offer virtual consultations via Zoom, Google Meet, or other platforms for clients who cannot visit our office in person. These sessions are just as comprehensive as in-person meetings."
    },
    {
      question: "Is there a fee for the initial consultation?",
      answer: "We offer a free 30-minute initial consultation to discuss your requirements and how we can assist you. Detailed consultations and personalized services may have applicable fees."
    },
    {
      question: "What documents should I bring for my first consultation?",
      answer: "It's helpful to bring your educational documents, passport, any existing test scores (like IELTS/PTE), and a clear idea of your goals. This allows us to provide more specific guidance during your first visit."
    }
  ];

  // Create services array
  const services: string[] = [
    "Study Abroad Consultations",
    "Visa Application Assistance",
    "IELTS & PTE Coaching",
    "University Selection Guidance",
    "Scholarship Assistance",
    "Pre-Departure Briefing"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/api/placeholder/1280/720"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              We&apos;re here to answer your questions and provide the assistance you need.
              Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-20 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0F4C5C] mb-6">
                Send Us a Message
              </h2>
              
              {status.info.error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                  <p>{status.info.msg}</p>
                </div>
              )}
              
              {status.submitted && !status.info.error && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                  <p>{status.info.msg}</p>
                </div>
              )}
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] text-gray-800"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] text-gray-800"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] text-gray-800"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] text-gray-800"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] text-gray-800"
                    placeholder="Please tell us how we can assist you..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit"
                    disabled={status.submitting}
                    className="bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white font-medium rounded-lg px-6 py-3 w-full md:w-auto"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-[#0F4C5C] mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-6">
                  {contactItems.map((item, index) => (
                    <li key={index} className="flex">
                      <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="text-[#0F4C5C]">{item.icon}</div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-[#0F4C5C]">{item.title}</h3>
                        <p className="text-gray-700">{item.info}</p>
                        <p className="text-sm text-gray-500">{item.subInfo}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0F4C5C] mb-6">
                  Our Services
                </h2>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-[#9FE870] mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C5C] mb-10 text-center">
      Find Us Here
    </h2>
    <div className="bg-white p-2 md:p-4 rounded-xl shadow-sm border border-gray-100">
      {/* Responsive map container with aspect ratio */}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8997995078917!2d151.2131272!3d-33.8608075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d3646a103%3A0xaf5746078e22581b!2sCircular%20Quay%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1716985723201!5m2!1sen!2sus" 
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Map showing our location in Sydney, Australia"
        ></iframe>
      </div>
      
      {/* Optional: Add location details that are also responsive */}
      <div className="mt-4 py-2 text-center md:text-left md:flex md:justify-between md:items-center">
        <div>
          <p className="font-medium text-gray-700">Our Sydney Location</p>
          <p className="text-sm text-gray-500">Circular Quay, Sydney NSW 2000, Australia</p>
        </div>
        <a 
          href="https://maps.app.goo.gl/EJqTRqtnm34J4bL36" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-2 md:mt-0 inline-block text-[#0F4C5C] text-sm font-medium hover:underline"
        >
          Get Directions →
        </a>
      </div>
    </div>
  </div>
</section>





      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C5C] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-[#0F4C5C] mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Stay updated with the latest information about study abroad opportunities, 
              visa policies, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-3 rounded-lg flex-1 focus:outline-none text-gray-800"
              />
              <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-lg px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}