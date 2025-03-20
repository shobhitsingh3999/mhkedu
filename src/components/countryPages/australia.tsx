import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Home, Users, CheckCircle } from "lucide-react";

export default function AustraliaVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder-australia-campus.jpg"  // Replace with your image
            alt="Australian University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in Australia
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience innovative education in a vibrant, multicultural environment with exceptional quality of life and promising career pathways.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Australia Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in Australia
              </h2>
              <p className="text-gray-700 mb-4">
                Australia offers a world-class education system with a strong focus on innovation, research, and practical skills. The country&apos;s 43 universities consistently rank among the top institutions globally, with exceptional strengths in fields like engineering, natural sciences, medicine, and business studies.
              </p>
              <p className="text-gray-700">
                The Australian Qualifications Framework (AQF) ensures that all qualifications meet strict quality standards and are recognized internationally. With a student-centered approach to learning that emphasizes critical thinking and creativity, Australian education prepares graduates to thrive in the global job market.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-australia-education.jpg"  // Replace with your image
                alt="Australia Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in Australia?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Global Recognition",
                description: "Degrees from Australian institutions are highly respected worldwide, opening doors to international career opportunities."
              },
              {
                icon: <Home size={24} />,
                title: "Quality of Life",
                description: "Australian cities consistently rank among the world's most livable, offering a high standard of living in safe, clean environments."
              },
              {
                icon: <Users size={24} />,
                title: "Cultural Diversity",
                description: "Experience a welcoming multicultural society where international students from all backgrounds feel at home."
              },
              {
                icon: <BookOpen size={24} />,
                title: "Innovative Education",
                description: "Benefit from cutting-edge teaching methods with a strong emphasis on research and practical skills development."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Post-Study Work Options",
                description: "Graduate work visas allow international students to gain valuable work experience for up to 4 years after completing their studies."
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Strong Support System",
                description: "Comprehensive support services for international students, including orientation programs, academic assistance, and wellbeing services."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                  <div className="text-[#0F4C5C]">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Top Universities in Australia
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "University of Melbourne",
                image: "/placeholder-melbourne.jpg",
                description: "Australia's leading university with particular strengths in medicine, education, law, and the arts."
              },
              {
                name: "Australian National University",
                image: "/placeholder-anu.jpg",
                description: "Located in Canberra, known for research excellence and strong connections to government and policy."
              },
              {
                name: "University of Sydney",
                image: "/placeholder-sydney.jpg",
                description: "One of Australia's oldest universities with comprehensive programs and a stunning campus."
              },
              {
                name: "University of Queensland",
                image: "/placeholder-queensland.jpg",
                description: "Leader in research across disciplines including biotechnology, engineering, and marine science."
              },
              {
                name: "Monash University",
                image: "/placeholder-monash.jpg",
                description: "Known for innovation, industry connections, and a global outlook with multiple international campuses."
              },
              {
                name: "University of New South Wales",
                image: "/placeholder-unsw.jpg",
                description: "Renowned for engineering, business, and scientific research with strong industry partnerships."
              }
            ].map((university, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={university.image}  // Replace with your image
                    alt={university.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">{university.name}</h3>
                  <p className="text-gray-600">{university.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Popular Courses in Australia
              </h2>
              <p className="text-gray-700 mb-8">
                Australian universities offer cutting-edge programs across diverse fields. These are some of the most popular disciplines for international students:
              </p>
              <ul className="space-y-4">
                {[
                  "Business and Management",
                  "Engineering and Information Technology",
                  "Health Sciences and Medicine",
                  "Natural Sciences",
                  "Education",
                  "Creative Arts and Design",
                  "Hospitality and Tourism Management",
                  "Environmental Sciences and Sustainability"
                ].map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9FE870] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-australia-students.jpg"  // Replace with your image
                alt="Australian Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post Study Work Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Post-Study Work Opportunities
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Temporary Graduate Visa (Subclass 485)</h3>
                <p className="text-gray-700">
                  After completing your studies, you can apply for the Post-Study Work stream of the Temporary Graduate visa, allowing you to work in Australia for 2-4 years, depending on your qualification level. Bachelor&apos;s degree graduates receive 2 years, Master&apos;s degree graduates 3 years, and PhD graduates 4 years.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Skilled Migration Pathways</h3>
                <p className="text-gray-700">
                  With Australian work experience, you may qualify for permanent residency through the General Skilled Migration program. This points-based system favors graduates with qualifications and skills in high-demand occupations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Regional Opportunities</h3>
                <p className="text-gray-700">
                  Studying and working in designated regional areas of Australia can provide additional points for skilled migration and access to special visa categories with pathways to permanent residency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Employer Sponsorship</h3>
                <p className="text-gray-700">
                  Graduates who find employment with an approved sponsor can apply for employer-sponsored work visas, which can lead to permanent residency after a qualifying period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Australia Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in Australia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description: "Options include on-campus residences, off-campus rentals, and homestays with Australian families. University housing services can help you find suitable accommodation."
              },
              {
                title: "Cost of Living",
                description: "Australia has a high standard of living with costs varying by city. Budget approximately AUD 1,400-2,500 per month for living expenses, including accommodation, food, transportation, and utilities."
              },
              {
                title: "Healthcare",
                description: "International students must have Overseas Student Health Cover (OSHC) for the duration of their visa, providing access to Australia's high-quality healthcare system."
              },
              {
                title: "Transportation",
                description: "Major cities have extensive public transport networks with student concessions available. Smaller cities and regional areas may have more limited options."
              },
              {
                title: "Climate and Lifestyle",
                description: "Australia enjoys a sunny climate with beautiful beaches and outdoor activities year-round. The laid-back lifestyle encourages work-life balance and outdoor recreation."
              },
              {
                title: "Working While Studying",
                description: "Student visas allow work up to 48 hours per fortnight during term time and unlimited hours during scheduled breaks, helping to offset living costs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0F4C5C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              How We Can Help You Study in Australia
            </h2>
            <p className="text-lg text-white/80">
              Our expert consultants provide comprehensive support for your Australian education journey, from application to arrival and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Course & University Selection",
                description: "We help you choose the right Australian institutions and programs aligned with your academic background, career goals, and budget."
              },
              {
                title: "Application Management",
                description: "Our team guides you through the application process for multiple institutions, including statement of purpose writing and document preparation."
              },
              {
                title: "Student Visa Assistance",
                description: "We provide expert guidance for your Australian student visa application, including GTE statement preparation and financial documentation."
              },
              {
                title: "Scholarship Guidance",
                description: "We identify scholarship opportunities at Australian institutions and assist with applications to help fund your education."
              },
              {
                title: "Accommodation Arrangements",
                description: "We help you explore housing options and connect you with university accommodation services or trusted external providers."
              },
              {
                title: "Pre-Departure Orientation",
                description: "Before you leave, we provide comprehensive information about Australian culture, climate, transportation, banking, and what to pack."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}