import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Home, CheckCircle } from "lucide-react";

export default function USAVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder-usa-campus.jpg"  // Replace with your image
            alt="USA University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in the United States
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience a world-leading education system with unparalleled opportunities in research, innovation, and career development.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About USA Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in the United States
              </h2>
              <p className="text-gray-700 mb-4">
                The United States hosts one of the world&apos;s most diverse education systems, with over 4,000 colleges and universities offering a wide range of programs and specializations.
              </p>
              <p className="text-gray-700">
                American higher education is known for its flexibility, allowing students to explore different subjects before choosing a major. With cutting-edge research opportunities and strong industry connections, studying in the USA provides an educational experience that is highly valued globally.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-usa-education.jpg"  // Replace with your image
                alt="USA Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in the USA */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in the United States?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Academic Excellence",
                description: "Home to many of the world's top-ranked universities with cutting-edge research facilities."
              },
              {
                icon: <BookOpen size={24} />,
                title: "Program Flexibility",
                description: "Explore different subjects before declaring a major, with options to customize your degree."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Career Opportunities",
                description: "Access to internships and connections with global industry leaders that boost your career prospects."
              },
              {
                icon: <Home size={24} />,
                title: "Cultural Experience",
                description: "Immerse yourself in America's diverse multicultural environment and develop global networks."
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
            Top Universities in the United States
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Harvard University",
                image: "/placeholder-harvard.jpg",
                description: "Prestigious Ivy League institution renowned for academic excellence across disciplines."
              },
              {
                name: "Massachusetts Institute of Technology (MIT)",
                image: "/placeholder-mit.jpg",
                description: "World-leading institution in science, engineering, and technology."
              },
              {
                name: "Stanford University",
                image: "/placeholder-stanford.jpg",
                description: "Known for entrepreneurship, engineering, and close ties to Silicon Valley's tech industry."
              },
              {
                name: "University of California, Berkeley",
                image: "/placeholder-berkeley.jpg",
                description: "Leading public research university with strengths in natural sciences and engineering."
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
                Popular Courses in the USA
              </h2>
              <p className="text-gray-700 mb-8">
                American universities offer a vast range of programs across all disciplines. Here are some of the most sought-after fields for international students:
              </p>
              <ul className="space-y-4">
                {[
                  "Computer Science and Information Technology",
                  "Business Administration and Management",
                  "Engineering (Various Specializations)",
                  "Data Science and Analytics",
                  "Health Sciences and Public Health",
                  "Media and Communications"
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
                src="/placeholder-usa-students.jpg"  // Replace with your image
                alt="USA Students"
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
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Optional Practical Training (OPT)</h3>
                <p className="text-gray-700">
                  OPT allows international students to work in their field of study for up to 12 months after graduation. Students in STEM fields can apply for a 24-month extension, providing up to 36 months of work experience in the USA.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">H-1B Visa</h3>
                <p className="text-gray-700">
                  After completing OPT, many graduates transition to H-1B visas sponsored by employers. This visa is for specialty occupations requiring theoretical and practical application of specialized knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in the USA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in the United States
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description: "Options include on-campus dormitories, off-campus apartments, and shared housing. First-year students often live in university housing for a more integrated experience."
              },
              {
                title: "Cost of Living",
                description: "Varies widely by location. Major cities like New York and San Francisco are significantly more expensive than smaller towns or midwest regions."
              },
              {
                title: "Healthcare",
                description: "International students are typically required to have health insurance. Many universities offer student health plans as part of their package."
              },
              {
                title: "Working While Studying",
                description: "F-1 visa students can work on-campus for up to 20 hours per week during semesters and full-time during breaks."
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
              How We Can Help You Study in the USA
            </h2>
            <p className="text-lg text-white/80">
              Our expert team provides comprehensive support throughout your journey to studying in the United States.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "University Selection",
                description: "We help you identify the best US universities for your academic profile, career goals, and budget."
              },
              {
                title: "Application Assistance",
                description: "Our experts guide you through the complex US university application process, including personal statements and standardized tests."
              },
              {
                title: "Visa Guidance",
                description: "We provide step-by-step support for your F-1 student visa application and interview preparation."
              },
              {
                title: "Scholarship Information",
                description: "We identify scholarship opportunities you may be eligible for to help fund your US education."
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