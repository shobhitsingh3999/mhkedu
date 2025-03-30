import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 140L70 70L140 140H0Z" fill="#9FE870" />
              <path d="M0 70L70 0L140 70H0Z" fill="#9FE870" fillOpacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-white max-w-xl">
          <h2 className="text-[42px] font-light mb-8 leading-[1.2]">
            <span className="text-[#9FE870] font-normal">Message from</span> Our
            Director
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-white/90 leading-relaxed">
              Based in Sydney, Australia, and an alumnus of{" "}
              <span className="text-[#F6B84C] font-medium">
                Karachi University
              </span>{" "}
              with a degree in BBA (Hons), I bring over 6 years of dedicated
              experience in the international education industry. Throughout my
              career, I have had the privilege of representing numerous
              prestigious universities around the world, gaining in-depth
              expertise in student recruitment, strategic marketing, and the
              ever-evolving study abroad sector.
            </p>

            <p className="text-white/90 leading-relaxed">
              My passion lies in empowering students to pursue their academic
              dreams beyond borders. With a strong track record in crafting
              impactful marketing campaigns and offering tailored counseling
              sessions, I have helped countless students navigate their journey
              to studying abroad — from choosing the right course and university
              to understanding visa processes and adapting to new cultures.
            </p>

            <p className="text-white/90 leading-relaxed">
              As the Director of our company, I lead a team of Qualified
              Education Counsellors who share the same vision and commitment.
              With a remarkable 95% visa grant success rate, we pride ourselves
              on delivering accurate, ethical, and personalized guidance that
              puts our students’ goals at the forefront.
            </p>
          </div>

          <Link
            href="https://www.facebook.com/people/MHK-Education-and-consultants/61556574771916/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-14 px-8 bg-white hover:bg-white/90 text-[#0F4C5C] rounded-full text-base font-normal">
              Facebook
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
