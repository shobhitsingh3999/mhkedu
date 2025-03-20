import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Home, Users, CheckCircle, Globe } from "lucide-react";

export default function EuropeVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder-europe-campus.jpg"  // Replace with your image
            alt="European University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in Europe
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience world-class education in historic institutions across diverse countries with rich cultural heritage and innovative research opportunities.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Europe Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in Europe
              </h2>
              <p className="text-gray-700 mb-4">
                Europe offers an unparalleled educational experience with institutions dating back centuries. Home to the Bologna Process, which standardizes higher education qualifications across 48 countries, European education combines rich academic traditions with cutting-edge innovation.
              </p>
              <p className="text-gray-700">
                Many European countries offer programs taught entirely in English, making quality education accessible to international students. With over 4,000 higher education institutions across the continent, students can choose from diverse educational approaches, from the research-intensive universities of Germany and Scandinavia to the prestigious grandes écoles of France and the historic institutions of Italy and Spain.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-europe-education.jpg"  // Replace with your image
                alt="Europe Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Europe */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in Europe?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Academic Excellence",
                description: "Study at some of the world's oldest and most prestigious universities with centuries of academic tradition."
              },
              {
                icon: <BookOpen size={24} />,
                title: "Affordable Education",
                description: "Many European countries offer free or low-cost tuition, even for international students, especially in Germany, Norway, and Finland."
              },
              {
                icon: <Globe size={24} />,
                title: "Cultural Diversity",
                description: "Experience multiple cultures, languages, and traditions within a relatively small geographic area."
              },
              {
                icon: <Home size={24} />,
                title: "Quality of Life",
                description: "Enjoy high living standards, excellent public transportation, healthcare systems, and safety across European countries."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Career Opportunities",
                description: "Gain access to internships and job opportunities with European companies and multinational corporations."
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Travel Opportunities",
                description: "Explore multiple countries easily during weekends and holidays with Europe's excellent transportation infrastructure."
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
            Top Universities in Europe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "University of Oxford (UK)",
                image: "/placeholder-oxford.jpg",
                description: "One of the world's oldest universities, renowned for its research excellence and tutorial-based teaching system."
              },
              {
                name: "ETH Zurich (Switzerland)",
                image: "/placeholder-eth.jpg",
                description: "Leading institution for science, technology, engineering, and mathematics with a strong focus on innovation."
              },
              {
                name: "Sorbonne University (France)",
                image: "/placeholder-sorbonne.jpg",
                description: "Historic Parisian university known for arts, humanities, sciences, and medicine in the heart of France's capital."
              },
              {
                name: "Technical University of Munich (Germany)",
                image: "/placeholder-munich.jpg",
                description: "Germany's top technical university with strengths in engineering, natural sciences, and technology."
              },
              {
                name: "University of Amsterdam (Netherlands)",
                image: "/placeholder-amsterdam.jpg",
                description: "Leading research university in the Netherlands with a wide range of English-taught programs."
              },
              {
                name: "KU Leuven (Belgium)",
                image: "/placeholder-leuven.jpg",
                description: "One of Europe's oldest and most renowned universities with exceptional research output across disciplines."
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
                Popular Courses in Europe
              </h2>
              <p className="text-gray-700 mb-8">
                European universities offer exceptional programs across many disciplines. These fields are particularly popular for international students:
              </p>
              <ul className="space-y-4">
                {[
                  "Business Administration and Management",
                  "Engineering (Mechanical, Civil, Electrical)",
                  "Computer Science and Artificial Intelligence",
                  "Arts and Humanities",
                  "Medicine and Health Sciences",
                  "Social Sciences",
                  "Architecture and Design",
                  "Hospitality and Tourism Management",
                  "Sustainable Development and Renewable Energy"
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
                src="/placeholder-europe-students.jpg"  // Replace with your image
                alt="European Students"
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
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Germany</h3>
                <p className="text-gray-700">
                  Graduates can stay for up to 18 months to seek employment related to their studies. With a job offer, you can apply for an EU Blue Card or a German residence permit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">France</h3>
                <p className="text-gray-700">
                  The "recherche d'emploi ou création d'entreprise" visa allows graduates to stay for 12 months after completing their studies to find work or start a business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Netherlands</h3>
                <p className="text-gray-700">
                  The Orientation Year permit enables graduates to live in the Netherlands for up to 12 months to find a job or start a business, with relaxed salary requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Ireland</h3>
                <p className="text-gray-700">
                  The Third Level Graduate Scheme allows non-EU/EEA students to remain in Ireland for 12-24 months after graduation to seek employment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">EU Blue Card</h3>
                <p className="text-gray-700">
                  Available across many EU countries, this work permit for highly skilled professionals offers a path to permanent residency and makes it easier to move between EU countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Europe Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in Europe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description: "Options range from university dormitories to private rentals and shared apartments. Some countries like Germany have 'studentenwerke' (student services) that help find affordable housing."
              },
              {
                title: "Cost of Living",
                description: "Varies significantly between countries and cities. Northern European countries tend to be more expensive, while Eastern and Southern Europe are generally more affordable."
              },
              {
                title: "Healthcare",
                description: "Most European countries have excellent healthcare systems. International students typically need health insurance, which is affordable or sometimes included with university enrollment."
              },
              {
                title: "Transportation",
                description: "Europe has excellent public transportation networks with student discounts. The Schengen Agreement allows easy travel between 26 European countries without border controls."
              },
              {
                title: "Student Life",
                description: "Rich cultural experiences with countless museums, historical sites, festivals, and events. Student associations organize activities, trips, and cultural exchanges."
              },
              {
                title: "Working While Studying",
                description: "EU students can work without restrictions. Non-EU students can typically work 20 hours per week during term time and full-time during holidays, though regulations vary by country."
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
              How We Can Help You Study in Europe
            </h2>
            <p className="text-lg text-white/80">
              Our expert team provides comprehensive guidance for studying in various European countries, helping you navigate different systems and requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Country & University Selection",
                description: "We help you choose the ideal European country and institution based on your academic goals, budget, language skills, and career aspirations."
              },
              {
                title: "Application Support",
                description: "Our team guides you through different application systems across European countries, including document preparation and submission procedures."
              },
              {
                title: "Visa Assistance",
                description: "We provide expert guidance for student visa applications to different European countries, with country-specific requirements and procedures."
              },
              {
                title: "Language Preparation",
                description: "We connect you with language courses for countries where programs are taught in local languages, or help you find English-taught programs."
              },
              {
                title: "Scholarship Guidance",
                description: "We identify scholarship opportunities across European institutions and assist with applications to help fund your education."
              },
              {
                title: "Pre-Departure Support",
                description: "Before you leave, we provide comprehensive information about European culture, climates, accommodation options, and practical living advice."
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