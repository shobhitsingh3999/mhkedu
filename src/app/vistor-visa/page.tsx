import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CheckCircle,
  Users,
  FileText,
  Clock,
} from "lucide-react";

export default function VisitorVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2017/12/16/22/23/regensburg-3023439_1280.jpg"
            alt="World Travel"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore the World Hassle-Free
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Let our visa experts handle the paperwork while you plan your perfect journey.
              Quick, reliable visa services for all your travel needs.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Choose Us for Your Visitor Visa?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={24} />,
                title: "Expert Guidance",
                description:
                  "Our team of visa specialists ensures your application is accurate and complete.",
              },
              {
                icon: <FileText size={24} />,
                title: "Personalized Support",
                description:
                  "Get tailored advice based on your travel needs and destination requirements.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Hassle-Free Documentation",
                description:
                  "Assistance with preparing and organizing all necessary documents for a smooth process.",
              },
              {
                icon: <Clock size={24} />,
                title: "Quick Turnaround",
                description:
                  "We streamline your application to minimize delays and ensure timely approvals.",
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

      {/* Countries We Assist With */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Countries We Assist With
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            We specialize in visitor visas for a range of destinations, including but not limited to:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Canada",
                image: "https://cdn.pixabay.com/photo/2017/07/11/12/18/flag-2493360_1280.jpg",
                description:
                  "Experience the beauty of its landscapes and connect with loved ones.",
              },
              {
                name: "Australia",
                image: "https://cdn.pixabay.com/photo/2017/08/28/18/51/international-2690850_1280.jpg",
                description:
                  "Evaluate your comprehension and interpretation of various texts.",
              },
              {
                name: "UK",
                image: "https://cdn.pixabay.com/photo/2019/03/21/12/51/brexit-4070957_1280.jpg",
                description:
                  "Discover rich history and modern attractions in the United Kingdom.",
              },
              {
                name: "Europe",
                image: "https://cdn.pixabay.com/photo/2016/10/27/19/38/euro-flag-1776253_1280.jpg",
                description:
                  "Visit multiple Schengen countries with one visa and enjoy a seamless European adventure.",
              },
            ].map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600">{country.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionist-5975961_1280.jpg"
                alt="Visa Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                What We Offer
              </h2>
              <p className="text-gray-700 mb-8">
                Our comprehensive visa services are designed to make your travel plans a reality
                with minimal stress and maximum efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  "Assistance with visa forms and documentation",
                  "Guidance on interview preparation (if required)",
                  "Information on visa rules and stay durations",
                  "Updates on visa status and timely follow-ups",
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9FE870] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Our Visa Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description:
                    "We begin with a thorough assessment of your travel plans and requirements to determine the best visa strategy.",
                },
                {
                  step: "2",
                  title: "Document Preparation",
                  description:
                    "Our experts help you gather and organize all necessary documentation according to the latest embassy requirements.",
                },
                {
                  step: "3",
                  title: "Application Submission",
                  description:
                    "We ensure your application is properly filled out and submitted with all supporting materials.",
                },
                {
                  step: "4",
                  title: "Interview Coaching",
                  description:
                    "If your visa requires an interview, we provide comprehensive preparation to help you answer questions confidently.",
                },
                {
                  step: "5",
                  title: "Visa Collection",
                  description:
                    "Once approved, we'll guide you through the final steps of collecting your visa and preparing for your journey.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Essential Travel Tips
              </h2>
              <p className="text-gray-700 mb-8">
                Making the most of your visitor visa and ensuring a smooth travel experience:
              </p>
              <ul className="space-y-4">
                {[
                  "Apply for your visa well in advance of your planned travel dates",
                  "Ensure your passport is valid for at least six months beyond your return date",
                  "Purchase comprehensive travel insurance that covers medical emergencies",
                  "Research local customs, laws, and cultural norms of your destination",
                  "Keep digital and physical copies of all important documents",
                  "Register with your country's embassy at your destination",
                  "Check if you need any vaccinations or health certificates",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9FE870] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2021/07/31/12/26/plane-6511878_1280.jpg"
                alt="Travel Tips"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact our visa experts today for a free consultation and take the first step
              toward your next great adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
                Book a Consultation
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-full h-12 px-8 text-lg">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does the visitor visa application process take?",
                  answer:
                    "Processing times vary by country and individual circumstances. Generally, it ranges from a few days to several weeks. We keep you informed about expected timeframes for your specific case.",
                },
                {
                  question: "What documents are typically required for a visitor visa?",
                  answer:
                    "Common requirements include a valid passport, completed application form, proof of travel purpose, accommodation details, financial proof, return ticket, and sometimes travel insurance. Specific requirements vary by destination.",
                },
                {
                  question: "Can you guarantee my visa will be approved?",
                  answer:
                    "While we cannot guarantee approval as final decisions rest with immigration authorities, our expertise significantly improves your chances by ensuring applications are complete, accurate, and present your case in the best light.",
                },
                {
                  question: "Do I need to attend an interview for every visitor visa?",
                  answer:
                    "Not all visitor visas require interviews. It depends on the destination country and sometimes your nationality or personal circumstances. We'll advise you if an interview is needed for your application.",
                },
                {
                  question: "Can I extend my visitor visa while I'm abroad?",
                  answer:
                    "Some countries allow visitor visa extensions, while others require you to exit and apply for a new visa. We can provide guidance on the specific rules for your destination country.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}