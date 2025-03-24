'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Calendar,
  Headphones,
  Edit,
  MessageSquare,
  Award,
  Briefcase,
  Globe
} from "lucide-react";

export default function CoachingOptionsPage() {
  const [activeTab, setActiveTab] = useState("IELTS");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/18/16/49/books-1835753_1280.jpg"
            alt="English Language Test Preparation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              English Proficiency Test Preparation
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Expert coaching to help you achieve your desired scores in IELTS and PTE exams.
              Open doors to international education, career advancement, and migration opportunities.
            </p>
            
            {/* Toggle Buttons */}
            <div className="inline-flex bg-white/10 rounded-full p-1 mb-8">
              <button
                onClick={() => setActiveTab("IELTS")}
                className={`py-2 px-6 rounded-full text-white font-medium transition-all duration-200 ${
                  activeTab === "IELTS" ? "bg-[#9FE870] text-[#0F4C5C]" : "hover:bg-white/10"
                }`}
              >
                IELTS
              </button>
              <button
                onClick={() => setActiveTab("PTE")}
                className={`py-2 px-6 rounded-full text-white font-medium transition-all duration-200 ${
                  activeTab === "PTE" ? "bg-[#9FE870] text-[#0F4C5C]" : "hover:bg-white/10"
                }`}
              >
                PTE
              </button>
            </div>

            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Book Free Demo Class
            </Button>
          </div>
        </div>
      </section>

      {/* IELTS Content */}
      {activeTab === "IELTS" && (
        <>
          {/* IELTS Introduction */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                    IELTS: Achieve Your Dreams
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The International English Language Testing System (IELTS) is the most widely recognized and 
                    accepted English language proficiency test for studying, working and living in English-speaking countries.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At Abroad Dreams Consultant, we provide comprehensive support to help you achieve your 
                    desired IELTS score, opening doors to educational, professional and immigration 
                    opportunities worldwide.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/09/30/12/18/ielts-1705198_1280.jpg"
                    alt="IELTS Preparation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our IELTS Coaching */}
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                Why Choose Our IELTS Coaching?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: <BookOpen size={24} />,
                    title: "Comprehensive Study Material",
                    description:
                      "Access up-to-date resources, practice tests and exclusive tips to boost your scores.",
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Expert Trainers",
                    description:
                      "Learn from certified IELTS trainers with years of experience in guiding students to success.",
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Personalized Approach",
                    description:
                      "Tailored coaching plans to focus on your strengths and address areas needing improvement.",
                  },
                  {
                    icon: <CheckCircle size={24} />,
                    title: "Mock Tests and Feedback",
                    description:
                      "Regular mock tests with detailed feedback to track your progress and improve accuracy.",
                  },
                  {
                    icon: <Clock size={24} />,
                    title: "Flexible Timings",
                    description:
                      "Classes are available on weekdays and weekends, making it convenient for students and working professionals.",
                  },
                  {
                    icon: <Globe size={24} />,
                    title: "Global Recognition",
                    description:
                      "Prepare for a test that's accepted by over 11,000 organizations worldwide including universities, employers, and immigration authorities.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IELTS Exam Format */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                IELTS Exam Format
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Headphones size={24} />,
                    title: "Listening (30 minutes)",
                    description:
                      "Test your ability to understand conversations and monologues in English.",
                  },
                  {
                    icon: <BookOpen size={24} />,
                    title: "Reading (60 minutes)",
                    description:
                      "Evaluate your skills in understanding texts from various contexts and styles.",
                  },
                  {
                    icon: <Edit size={24} />,
                    title: "Writing (60 minutes)",
                    description:
                      "Showcase your ability to write essays and analyze data effectively.",
                  },
                  {
                    icon: <MessageSquare size={24} />,
                    title: "Speaking (11-14 minutes)",
                    description:
                      "Demonstrate your fluency and confidence in spoken English during a face-to-face interview.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IELTS Key Highlights */}
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2022/05/24/04/38/study-7217599_1280.jpg"
                    alt="IELTS Key Highlights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                    Our Key Highlights
                  </h2>
                  <p className="text-gray-700 mb-8">
                    At Abroad Dreams Consultant, we go above and beyond to ensure your IELTS success:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "One-on-one doubt clearing sessions",
                      "Intensive practice for high-band scores",
                      "Tips for time management and accuracy",
                      "Assistance with test registration and scheduling",
                      "Regular progress assessments",
                      "Access to extensive practice material",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#9FE870] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Join Our IELTS Coaching */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                Who Should Join Our IELTS Coaching?
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <GraduationCap size={24} />,
                    title: "Students",
                    description:
                      "Planning to study abroad at universities and colleges that require IELTS scores for admission.",
                  },
                  {
                    icon: <Briefcase size={24} />,
                    title: "Professionals",
                    description:
                      "Aiming to work in English-speaking countries or international organizations that require English proficiency.",
                  },
                  {
                    icon: <Globe size={24} />,
                    title: "Migrants",
                    description:
                      "Anyone needing an English language proficiency certificate for migration or career advancement.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4 mx-auto">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Can Help */}
          <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  How Abroad Dreams Consultant Can Help You
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  At Abroad Dreams Consultant, we're committed to your success. From personalized coaching 
                  to exam preparation strategies, we're here to guide you every step of the way.
                </p>
                <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
                  Start Your IELTS Preparation
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* PTE Content */}
      {activeTab === "PTE" && (
        <>
          {/* PTE Introduction */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                    PTE: Your Path to Success
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The Pearson Test of English (PTE) is your gateway to studying, working or migrating abroad. 
                    This computer-based test assesses your reading, writing, listening and speaking abilities 
                    in academic English.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At Abroad Dreams Consultant, we provide expert coaching to help you achieve your desired 
                    scores and make your dreams a reality.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/09/30/12/18/ielts-1705198_1280.jpg"
                    alt="PTE Preparation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our PTE Coaching */}
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                Why Choose Our PTE Coaching?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: <Users size={24} />,
                    title: "Certified Trainers",
                    description:
                      "Learn from experienced professionals who specialize in PTE coaching and test preparation.",
                  },
                  {
                    icon: <BookOpen size={24} />,
                    title: "Comprehensive Study Material",
                    description:
                      "Access the latest resources, practice tests and strategies tailored to the PTE format.",
                  },
                  {
                    icon: <Calendar size={24} />,
                    title: "Flexible Learning Options",
                    description:
                      "Choose from online or in-person classes with flexible timings to suit your schedule.",
                  },
                  {
                    icon: <CheckCircle size={24} />,
                    title: "Regular Practice Tests",
                    description:
                      "Take full-length mock tests to familiarize yourself with the exam environment and track your progress.",
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Individual Attention",
                    description:
                      "Benefit from personalized feedback and one-on-one sessions to focus on areas needing improvement.",
                  },
                  {
                    icon: <Globe size={24} />,
                    title: "Latest Exam Patterns",
                    description:
                      "Stay updated with the most recent PTE exam patterns and question types to ensure you're fully prepared.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PTE Exam Format */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                PTE Exam Format
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Edit size={24} />,
                    title: "Speaking and Writing (77-93 minutes)",
                    description:
                      "Test your ability to communicate effectively through speech and written tasks.",
                  },
                  {
                    icon: <BookOpen size={24} />,
                    title: "Reading (32-41 minutes)",
                    description:
                      "Evaluate your comprehension and interpretation of various texts.",
                  },
                  {
                    icon: <Headphones size={24} />,
                    title: "Listening (45-57 minutes)",
                    description:
                      "Assess your ability to understand spoken English in different accents and contexts.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why PTE */}
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
                Why PTE?
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Clock size={24} />,
                    title: "Fast Results",
                    description:
                      "Receive your scores in just 48 hours, allowing you to plan your next steps quickly.",
                  },
                  {
                    icon: <Globe size={24} />,
                    title: "Accepted Worldwide",
                    description:
                      "Recognized by universities, colleges and immigration authorities globally.",
                  },
                  {
                    icon: <Briefcase size={24} />,
                    title: "Computer-Based Test",
                    description:
                      "Ensures a fair and unbiased assessment of your skills with consistent scoring.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4 mx-auto">
                      <div className="text-[#0F4C5C]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Support */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2022/05/24/04/38/study-7217599_1280.jpg"
                    alt="PTE Support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                    How Abroad Dreams Consultant Supports You
                  </h2>
                  <p className="text-gray-700 mb-8">
                    We provide comprehensive support throughout your PTE preparation journey:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Tailored coaching to match your proficiency level",
                      "Tips for time management and accuracy",
                      "Guidance on registration and test-day preparation",
                      "Ongoing support to ensure your success",
                      "Strategies for achieving your target score",
                      "Regular progress tracking and feedback",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#9FE870] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Excel in Your PTE Exam?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Join our expert-led PTE coaching program and take the first step toward achieving your
                  international education and career goals.
                </p>
                <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
                  Begin Your PTE Journey
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Testimonials Section - Common for both tabs
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Sharma",
                score: activeTab === "IELTS" ? "IELTS: 8.0 Band" : "PTE: 85 Score",
                testimonial:
                  "The structured coaching and personalized attention helped me achieve my target score. The mock tests were particularly helpful in building my confidence.",
                course: activeTab === "IELTS" ? "IELTS Academic" : "PTE Academic",
              },
              {
                name: "Priya Patel",
                score: activeTab === "IELTS" ? "IELTS: 7.5 Band" : "PTE: 79 Score",
                testimonial:
                  "I was struggling with the speaking section, but the trainers provided effective strategies that helped me improve significantly. Highly recommend!",
                course: activeTab === "IELTS" ? "IELTS General" : "PTE Academic",
              },
              {
                name: "Ahmed Khan",
                score: activeTab === "IELTS" ? "IELTS: 8.5 Band" : "PTE: 90 Score",
                testimonial:
                  "The preparation materials and practice tests were comprehensive. The trainers were knowledgeable and always available to clear my doubts.",
                course: activeTab === "IELTS" ? "IELTS Academic" : "PTE Academic",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[#0F4C5C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F4C5C]">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.course}</p>
                  </div>
                </div>
                <p className="text-green-600 font-semibold mb-2">{item.score}</p>
                <p className="text-gray-600 italic">"{item.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* FAQ Section - Common for both tabs */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: `How long does it take to prepare for the ${activeTab} exam?`,
                  answer: `The preparation time for ${activeTab} varies depending on your current English proficiency level and target score. On average, students spend 4-12 weeks preparing, with regular practice and guided coaching.`,
                },
                {
                  question: `What materials are provided in your ${activeTab} coaching program?`,
                  answer: `Our coaching program includes comprehensive study materials, practice tests, skill-building exercises, and targeted strategies for each section of the ${activeTab} exam. All materials are regularly updated to match the current exam format.`,
                },
                {
                  question: `Do you offer online ${activeTab} coaching?`,
                  answer: `Yes, we offer both in-person and online ${activeTab} coaching options. Our online program includes live interactive sessions, recorded lessons, practice materials, and one-on-one feedback sessions.`,
                },
                {
                  question: `How are your ${activeTab} mock tests conducted?`,
                  answer: `Our mock tests simulate the actual ${activeTab} exam environment. For ${activeTab === "IELTS" ? "IELTS, we conduct paper-based or computer-delivered tests matching your chosen format, with proper timing and conditions" : "PTE, we use computer-based practice tests that closely resemble the real exam interface and timing"}. Each mock test is followed by detailed feedback and score analysis.`,
                },
                {
                  question: `What is the validity of ${activeTab} scores?`,
                  answer: `${activeTab === "IELTS" ? "IELTS scores are valid for 2 years from the date of the test" : "PTE Academic scores are valid for 2 years from the date of the test"}. It's important to plan your exam according to your application timelines.`,
                },
              ].map((item, index) => (
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

      {/* Final CTA - Common for both tabs */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Begin Your {activeTab} Preparation Journey Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Take the first step toward achieving your international education and career goals.
              Our expert coaches are ready to guide you to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
                Book a Demo Class
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-full h-12 px-8 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// These components are being used but weren't imported in the original code
import { GraduationCap } from "lucide-react";