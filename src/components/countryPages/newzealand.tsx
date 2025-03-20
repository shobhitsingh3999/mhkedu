import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Home, Users, CheckCircle } from "lucide-react";

export default function NewZealandVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder-newzealand-campus.jpg"  // Replace with your image
            alt="New Zealand University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in New Zealand
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience world-class education in a safe, welcoming environment with stunning natural landscapes and excellent quality of life.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About New Zealand Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in New Zealand
              </h2>
              <p className="text-gray-700 mb-4">
                New Zealand offers a British-based education system with a practical, hands-on learning approach that encourages creative thinking and innovation. All eight of New Zealand's universities rank in the top 3% globally, providing world-class education in a supportive environment.
              </p>
              <p className="text-gray-700">
                The New Zealand Qualifications Framework (NZQF) ensures that all qualifications are recognized and valued internationally. With small class sizes and a focus on research-based teaching, New Zealand institutions foster close relationships between students and professors, creating an ideal learning environment where students are encouraged to ask questions and develop independent thinking skills.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder-newzealand-education.jpg"  // Replace with your image
                alt="New Zealand Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in New Zealand?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Quality Education",
                description: "All New Zealand universities rank in the top 3% globally, with qualifications recognized and respected worldwide."
              },
              {
                icon: <Home size={24} />,
                title: "Safe & Welcoming",
                description: "One of the world's safest and most peaceful countries with a friendly, inclusive culture that embraces diversity."
              },
              {
                icon: <BookOpen size={24} />,
                title: "Innovative Teaching",
                description: "Practical, hands-on learning approach that encourages critical thinking, creativity, and problem-solving skills."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Work Opportunities",
                description: "Work rights during and after studies, with post-study work visas offering pathways to employment and residency."
              },
              {
                icon: <Users size={24} />,
                title: "Affordable Options",
                description: "Lower tuition and living costs compared to many other English-speaking destinations, with various scholarship opportunities."
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Stunning Environment",
                description: "Experience breathtaking landscapes, outdoor adventures, and excellent work-life balance in a clean, green country."
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
            Top Universities in New Zealand
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "University of Auckland",
                image: "/placeholder-auckland.jpg",
                description: "New Zealand's highest-ranked university, known for research excellence across disciplines, particularly in engineering, medicine, and business."
              },
              {
                name: "University of Otago",
                image: "/placeholder-otago.jpg",
                description: "New Zealand's first university with strengths in health sciences, sciences, and humanities in a vibrant student city."
              },
              {
                name: "Victoria University of Wellington",
                image: "/placeholder-wellington.jpg",
                description: "Located in New Zealand's capital city with strengths in law, public policy, architecture, and creative arts."
              },
              {
                name: "University of Canterbury",
                image: "/placeholder-canterbury.jpg",
                description: "Known for engineering, forestry, and natural sciences with strong industry connections and research facilities."
              },
              {
                name: "Massey University",
                image: "/placeholder-massey.jpg",
                description: "Specializes in agriculture, veterinary science, aviation, and distance learning with campuses across New Zealand."
              },
              {
                name: "Lincoln University",
                image: "/placeholder-lincoln.jpg",
                description: "New Zealand's agricultural university with expertise in agriculture, horticulture, and environmental management."
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
                Popular Courses in New Zealand
              </h2>
              <p className="text-gray-700 mb-8">
                New Zealand institutions offer a wide range of quality programs. These are some of the most popular fields for international students:
              </p>
              <ul className="space-y-4">
                {[
                  "Business and Management",
                  "Engineering and Information Technology",
                  "Health Sciences and Medicine",
                  "Agriculture and Forestry",
                  "Environmental Science and Conservation",
                  "Hospitality and Tourism Management",
                  "Film, Animation, and Digital Design",
                  "Marine Biology and Aquaculture"
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
                src="/placeholder-newzealand-students.jpg"  // Replace with your image
                alt="New Zealand Students"
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
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Post-Study Work Visa</h3>
                <p className="text-gray-700">
                  After completing your studies, you can apply for a post-study work visa that allows you to work for any employer in New Zealand. The duration depends on your level of study and location: up to 3 years for a bachelor's degree or higher qualification, and up to 2 years for lower-level qualifications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Skilled Migrant Category</h3>
                <p className="text-gray-700">
                  With work experience gained through your post-study work visa, you may be eligible to apply for permanent residency through the Skilled Migrant Category. This points-based system considers factors like age, work experience, qualifications, and job offers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Work to Residence Pathway</h3>
                <p className="text-gray-700">
                  If you secure a job with an accredited employer or in an occupation with skill shortages, you may be eligible for the Work to Residence pathway, which can lead to permanent residency after working for two years.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Regional Benefits</h3>
                <p className="text-gray-700">
                  Studying and working outside Auckland can provide additional points for skilled migration and potentially longer post-study work rights, encouraging international students to explore opportunities throughout New Zealand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in New Zealand Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in New Zealand
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description: "Options include university halls of residence, homestays with local families, private rentals, and shared flats. University accommodation services can help you find suitable housing."
              },
              {
                title: "Cost of Living",
                description: "Affordable compared to many Western countries. Budget approximately NZD 15,000-25,000 per year for living expenses, depending on location and lifestyle. Auckland is generally more expensive than other cities."
              },
              {
                title: "Healthcare",
                description: "International students on courses longer than two years are eligible for publicly funded healthcare. All students must have appropriate medical and travel insurance for the duration of their stay."
              },
              {
                title: "Transportation",
                description: "Good public transport in major cities, with student discounts available. Smaller cities and towns have more limited options. Many students use bicycles for local travel."
              },
              {
                title: "Work While Studying",
                description: "Student visas typically allow work up to 20 hours per week during term time and full-time during scheduled breaks, providing valuable experience and additional income."
              },
              {
                title: "Lifestyle and Culture",
                description: "Relaxed, outdoor lifestyle with emphasis on work-life balance. Rich Māori cultural heritage and diverse multicultural society. Countless opportunities for outdoor adventures in stunning natural settings."
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
              How We Can Help You Study in New Zealand
            </h2>
            <p className="text-lg text-white/80">
              Our expert team provides comprehensive support throughout your journey to studying in New Zealand, ensuring a smooth transition to your new academic life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Institution Selection",
                description: "We help you identify the best New Zealand institutions and programs that match your academic profile, career goals, and budget."
              },
              {
                title: "Application Assistance",
                description: "Our team guides you through the application process for multiple institutions, including personal statement writing and document preparation."
              },
              {
                title: "Visa Guidance",
                description: "We provide step-by-step support for your New Zealand student visa application, helping you navigate requirements and prepare documentation."
              },
              {
                title: "Scholarship Applications",
                description: "We identify scholarship opportunities you may be eligible for and assist with applications to help fund your New Zealand education."
              },
              {
                title: "Accommodation Arrangements",
                description: "We help you explore housing options and connect you with university accommodation services or trusted external providers."
              },
              {
                title: "Pre-Departure Support",
                description: "Before you leave, we provide comprehensive information about New Zealand culture, climate, what to pack, and practical aspects of living as a student."
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