import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Home, Users, CheckCircle } from "lucide-react";

export default function CanadaVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder-canada-campus.jpg"  // Replace with your image
            alt="Canadian University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in Canada
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience high-quality education in a safe, multicultural environment with clear pathways to immigration and global career opportunities.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Canada Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in Canada
              </h2>
              <p className="text-gray-700 mb-4">
                Canada's education system is known for its excellence and consistently ranks among the world's best. With a wide range of programs offered by over 100 public and private universities and numerous colleges, students can find the perfect academic fit for their goals.
              </p>
              <p className="text-gray-700">
                Canadian institutions are at the forefront of research and innovation, particularly in fields like artificial intelligence, renewable energy, and biotechnology. The country's education approach emphasizes both theoretical knowledge and practical skills, preparing graduates for success in the global job market.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-canada-education.jpg"  // Replace with your image
                alt="Canada Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in Canada?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "World-Class Education",
                description: "Internationally recognized degrees from institutions known for high academic standards and innovative teaching methods."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Immigration Pathways",
                description: "Clear routes to permanent residency through programs like the Post-Graduation Work Permit and Express Entry system."
              },
              {
                icon: <Home size={24} />,
                title: "Safe & Welcoming",
                description: "Consistently ranked among the world's safest countries with a reputation for friendliness and inclusivity."
              },
              {
                icon: <Users size={24} />,
                title: "Multicultural Environment",
                description: "Diverse communities that celebrate different cultures, making international students feel at home."
              },
              {
                icon: <BookOpen size={24} />,
                title: "Affordable Education",
                description: "Lower tuition fees compared to many other English-speaking countries, with numerous scholarship opportunities."
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Work While Studying",
                description: "Students can work up to 20 hours per week during term and full-time during breaks to gain experience and offset costs."
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
            Top Universities in Canada
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "University of Toronto",
                image: "/placeholder-toronto.jpg",
                description: "Canada's top-ranked university with strengths in medicine, business, engineering, and humanities."
              },
              {
                name: "University of British Columbia",
                image: "/placeholder-ubc.jpg",
                description: "Located in Vancouver, known for research excellence and beautiful campus settings."
              },
              {
                name: "McGill University",
                image: "/placeholder-mcgill.jpg",
                description: "Historic Montreal institution with a strong international reputation across disciplines."
              },
              {
                name: "University of Waterloo",
                image: "/placeholder-waterloo.jpg",
                description: "Leader in innovation with North America's largest co-operative education program."
              },
              {
                name: "University of Alberta",
                image: "/placeholder-alberta.jpg",
                description: "Known for research in health sciences, engineering, and natural resources."
              },
              {
                name: "University of Montreal",
                image: "/placeholder-montreal.jpg",
                description: "Major French-language research university with strengths in medicine and sciences."
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
                Popular Courses in Canada
              </h2>
              <p className="text-gray-700 mb-8">
                Canadian institutions offer diverse programs across multiple disciplines. These are some of the most popular fields for international students:
              </p>
              <ul className="space-y-4">
                {[
                  "Business and Management",
                  "Computer Science and IT",
                  "Engineering (Civil, Mechanical, Electrical)",
                  "Healthcare and Medicine",
                  "Media and Communication Studies",
                  "Environmental Science and Renewable Energy",
                  "Hospitality and Tourism Management",
                  "Digital Marketing and E-commerce"
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
                src="/placeholder-canada-students.jpg"  // Replace with your image
                alt="Canadian Students"
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
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Post-Graduation Work Permit (PGWP)</h3>
                <p className="text-gray-700">
                  After completing a program of at least 8 months at an eligible institution, international students can apply for a work permit valid for up to 3 years. The length of the PGWP depends on the duration of your study program.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Express Entry System</h3>
                <p className="text-gray-700">
                  With Canadian work experience gained through the PGWP, graduates can apply for permanent residency through the Express Entry system, which gives additional points for Canadian education and work experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Provincial Nominee Programs</h3>
                <p className="text-gray-700">
                  Many Canadian provinces have specific immigration streams for international graduates from their institutions, offering a faster pathway to permanent residency for those who wish to settle in that province.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Start-up Visa Program</h3>
                <p className="text-gray-700">
                  Entrepreneurial graduates with innovative business ideas can apply for permanent residency through Canada's Start-up Visa Program if they secure support from a designated organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Canada Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in Canada
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description: "Options include on-campus residences, off-campus rentals, and homestays with Canadian families. University housing offices can help you find suitable accommodation."
              },
              {
                title: "Cost of Living",
                description: "Varies by city, with Toronto and Vancouver being the most expensive. Monthly expenses typically range from CAD 1,000-2,000 including accommodation, food, transportation, and other essentials."
              },
              {
                title: "Healthcare",
                description: "International students in most provinces are eligible for provincial health insurance plans. Some provinces require private health insurance, often available through your institution."
              },
              {
                title: "Transportation",
                description: "Major cities have excellent public transit systems. Many universities provide discounted transit passes for students. Smaller cities may have more limited options."
              },
              {
                title: "Climate",
                description: "Canada experiences four distinct seasons, with cold winters (especially inland) and warm summers. Be prepared with appropriate clothing for all weather conditions."
              },
              {
                title: "Cultural Experience",
                description: "Enjoy vibrant multicultural communities, diverse cuisines, festivals, arts, and outdoor activities ranging from hiking and skiing to exploring national parks."
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
              How We Can Help You Study in Canada
            </h2>
            <p className="text-lg text-white/80">
              Our expert consultants will guide you through every step of your journey to study in Canada, from choosing the right program to settling into your new life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Institution & Program Selection",
                description: "We help you find the perfect Canadian institution and program that matches your academic background, career goals, and budget."
              },
              {
                title: "Application Assistance",
                description: "Our team guides you through the application process for multiple institutions, including document preparation and submission."
              },
              {
                title: "Study Permit Guidance",
                description: "We provide comprehensive support for your Canadian study permit application, including preparing for biometrics and interviews."
              },
              {
                title: "Scholarship Applications",
                description: "We identify scholarship opportunities you're eligible for and assist with applications to help fund your Canadian education."
              },
              {
                title: "Pre-Departure Support",
                description: "Before you leave, we provide detailed information about Canadian culture, weather, accommodation options, and what to pack."
              },
              {
                title: "Immigration Pathway Planning",
                description: "We offer guidance on post-graduation work and immigration options to help you plan your long-term future in Canada."
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