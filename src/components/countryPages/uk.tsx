import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Home,
  Users,
  CheckCircle,
} from "lucide-react";

export default function UKVisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2015/02/12/15/47/london-633880_1280.jpg" // Replace with your image
            alt="UK University Campus"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study in the United Kingdom
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience world-class education in one of the most prestigious
              academic destinations with centuries of educational excellence and
              innovation.
            </p>
            <Button className="bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full h-12 px-8 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About UK Education Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-6">
                Education in the United Kingdom
              </h2>
              <p className="text-gray-700 mb-4">
                The UK boasts a rich academic tradition dating back centuries,
                with some of the world&apos;s oldest and most prestigious
                universities. The British education system is renowned for its
                high standards, innovative teaching methods, and research
                excellence.
              </p>
              <p className="text-gray-700 mb-4">
                With over 160 universities and higher education institutions,
                the UK offers a diverse range of courses and qualifications
                recognized worldwide. From undergraduate degrees to
                master&apos;s programs and doctoral research, students can find
                opportunities that match their academic and career aspirations.
              </p>
              <p className="text-gray-700">
                The UK&apos;s multicultural environment welcomes international
                students from all backgrounds, creating a rich and diverse
                academic community where global perspectives are valued and
                encouraged.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2015/02/12/15/47/london-633880_1280.jpg" // Replace with your image
                alt="UK Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in the UK */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Why Study in the United Kingdom?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "World-Class Education",
                description:
                  "Home to many universities consistently ranked in the world's top 100, offering exceptional academic quality and teaching standards.",
              },
              {
                icon: <BookOpen size={24} />,
                title: "Shorter Courses",
                description:
                  "Undergraduate degrees typically take 3 years, and most master's programs just 1 year, saving you time and money.",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Post-Study Work Opportunities",
                description:
                  "The Graduate Route allows students to stay and work in the UK for 2 years (3 years for PhD graduates) after completing their studies.",
              },
              {
                icon: <Home size={24} />,
                title: "Cultural Experience",
                description:
                  "Live in a multicultural society with rich history, diverse cities, and easy access to travel throughout Europe.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Strong Industry Connections",
                description:
                  "Benefit from university partnerships with leading industries, enhancing your employability through internships and placements.",
              },
              {
                icon: <Users size={24} />,
                title: "Supportive Environment",
                description:
                  "Universities offer comprehensive student support services, including dedicated international student advisors.",
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

      {/* Top Universities Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-10 text-center">
            Top Universities in the United Kingdom
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "University of Oxford",
                image: "https://cdn.pixabay.com/photo/2020/03/27/17/46/needles-4974448_1280.jpg",
                description:
                  "One of the oldest and most prestigious universities in the world, renowned for research and academic excellence.",
              },
              {
                name: "University of Cambridge",
                image: "https://cdn.pixabay.com/photo/2020/11/19/08/03/college-5757816_1280.jpg",
                description:
                  "Historic university with a global reputation for outstanding academic achievement and original research.",
              },
              {
                name: "Imperial College London",
                image: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
                description:
                  "World-class university specializing in science, engineering, medicine, and business.",
              },
              {
                name: "London School of Economics",
                image: "https://cdn.pixabay.com/photo/2014/06/07/18/00/city-of-london-364512_1280.jpg",
                description:
                  "Renowned for social sciences, economics, politics, and law studies.",
              },
              {
                name: "University of Edinburgh",
                image: "https://cdn.pixabay.com/photo/2022/08/20/02/12/edinburgh-castle-7398037_1280.jpg",
                description:
                  "One of Scotland's ancient universities with strengths across humanities, science, and medicine.",
              },
              {
                name: "University of Manchester",
                image: "https://cdn.pixabay.com/photo/2020/02/06/20/48/uni-4825471_1280.jpg",
                description:
                  "Known for its research impact and industry connections across multiple disciplines.",
              },
            ].map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={university.image} // Replace with your image
                    alt={university.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">
                    {university.name}
                  </h3>
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
                Popular Courses in the UK
              </h2>
              <p className="text-gray-700 mb-8">
                The UK offers a wide range of globally recognized programs. Here
                are some of the most popular fields of study for international
                students:
              </p>
              <ul className="space-y-4">
                {[
                  "Business and Management",
                  "Computer Science and IT",
                  "Engineering (Civil, Mechanical, Electrical)",
                  "Medicine and Health Sciences",
                  "Law",
                  "Arts and Humanities",
                  "Media and Communications",
                  "Social Sciences",
                  "Finance and Economics",
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
                src="https://cdn.pixabay.com/photo/2018/08/11/16/50/london-3598951_1280.jpg" // Replace with your image
                alt="UK Students"
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
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  Graduate Route Visa
                </h3>
                <p className="text-gray-700">
                  The UK&apos;s Graduate Route allows international students to
                  stay and work, or look for work, in the UK for 2 years after
                  completing their studies (3 years for PhD graduates). This
                  visa requires no sponsorship and has no minimum salary
                  requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  Skilled Worker Visa
                </h3>
                <p className="text-gray-700">
                  After finding employment, you can switch to a Skilled Worker
                  visa if your job meets the skill and salary requirements. Many
                  UK employers are registered sponsors who can offer this
                  pathway.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  High Potential Individual Visa
                </h3>
                <p className="text-gray-700">
                  Graduates from top-ranked global universities can apply for
                  this visa, allowing them to work or look for work in the UK
                  for 2 years without requiring a job offer first.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  Start-up and Innovator Visas
                </h3>
                <p className="text-gray-700">
                  For entrepreneurial graduates looking to start a business in
                  the UK, these visas provide pathways to develop innovative
                  business ideas with support from UK universities or approved
                  business organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in the UK Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F4C5C] mb-8 text-center">
            Living in the United Kingdom
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Accommodation",
                description:
                  "Options range from university halls of residence to private rentals. University accommodation is convenient for first-year students, while shared houses or apartments are popular for later years.",
              },
              {
                title: "Cost of Living",
                description:
                  "Varies significantly by location. London is the most expensive city, while northern cities and towns typically offer more affordable living. Budget approximately £1,000-£1,500 per month including accommodation in most UK cities.",
              },
              {
                title: "Healthcare",
                description:
                  "International students on courses longer than six months pay the Immigration Health Surcharge, giving access to the National Health Service (NHS). This covers most medical care including consultations, hospital treatment, and emergency services.",
              },
              {
                title: "Transportation",
                description:
                  "Excellent public transport networks including buses, trains, and underground systems in major cities. Students receive discounts on most public transport with a valid student ID or railcard.",
              },
              {
                title: "Working While Studying",
                description:
                  "Student visas typically allow work up to 20 hours per week during term time and full-time during holidays, providing valuable experience and supplementary income.",
              },
              {
                title: "Culture and Lifestyle",
                description:
                  "Rich cultural heritage with museums, galleries, theaters, and historic sites. Diverse food scene reflecting global influences. Varied landscapes from bustling cities to stunning countryside and coastlines.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  {item.title}
                </h3>
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
              How We Can Help You Study in the UK
            </h2>
            <p className="text-lg text-white/80">
              Our expert team provides comprehensive support throughout your
              journey to studying in the United Kingdom, making the process
              smooth and successful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "University Selection",
                description:
                  "We help you identify the best UK universities for your academic profile, career goals, and budget.",
              },
              {
                title: "Application Assistance",
                description:
                  "Our experts guide you through the application process for multiple universities, including personal statement reviews and document preparation.",
              },
              {
                title: "Visa Guidance",
                description:
                  "We provide step-by-step support for your UK student visa application, helping you prepare all required documents and for your visa interview.",
              },
              {
                title: "Scholarship Information",
                description:
                  "We identify scholarship opportunities you may be eligible for and assist with applications to help fund your UK education.",
              },
              {
                title: "Pre-Departure Briefing",
                description:
                  "Before you leave, we provide comprehensive information about UK culture, academic expectations, and practical aspects of living in the UK.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Our relationship doesn't end once you arrive in the UK. We continue to provide support throughout your academic journey.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  {item.title}
                </h3>
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
