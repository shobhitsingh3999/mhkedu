import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutDirectorSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#0A3845] min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center py-24">
        {/* Left side - Image */}
        <div className="relative h-[600px] w-full">
          {/* Image with gradient overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Our Director"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/80 to-transparent" />
          </div>

          {/* Triangles overlay */}
          <div className="absolute left-0 bottom-0 z-10">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 140L70 70L140 140H0Z" fill="#9FE870"/>
              <path d="M0 70L70 0L140 70H0Z" fill="#9FE870" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-white max-w-xl">
          <h2 className="text-[42px] font-light mb-8 leading-[1.2]">
            <span className="text-[#9FE870] font-normal">Message from</span> Our Director
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-white/90 leading-relaxed">
              Based in Delhi and an alumnus of <span className="text-[#F6B84C] font-medium">Delhi University</span> with a degree in <span className="text-[#F6B84C] font-medium">B.Com (Hons.)</span>, I bring over <span className="text-[#F6B84C] font-medium">10 years</span> of extensive experience in the international education industry. Over the years, I have worked as a representative for numerous prestigious universities abroad, gaining in-depth expertise in student recruitment, marketing strategies and the study abroad sector.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              With a proven track record in developing effective marketing campaigns and providing personalized counseling to aspiring students, I have successfully guided countless individuals in achieving their academic and career aspirations overseas. My deep understanding of global education systems, visa processes and cultural adaptation equips me to offer comprehensive support to students and their families.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              As the Director of my company, I am committed to leveraging my skills and knowledge to build meaningful partnerships with international institutions and deliver unparalleled services to students, ensuring their transition to studying abroad is seamless and rewarding.
            </p>
          </div>

          <Button 
            className="h-14 px-8 bg-white hover:bg-white/90 text-[#0F4C5C] rounded-full text-base font-normal"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}