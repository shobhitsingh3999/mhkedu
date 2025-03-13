import Image from "next/image";
import Link from "next/link";

interface Conference {
  year: string;
  title: string;
  location: string;
  footer: string;
}

interface Story {
  date: string;
  title: string;
  type: "image" | "conference";
  image?: string;
  conference?: Conference;
}

const stories: Story[] = [
  {
    date: "October 23, 2024",
    title: "Competitive edge business differentiation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    type: "image"
  },
  {
    date: "October 23, 2024",
    title: "Seize every chance in today's digital landscape",
    type: "conference",
    conference: {
      year: "2025",
      title: "Finance Conference",
      location: "London",
      footer: "Powered by StartPro Community"
    }
  },
  {
    date: "October 23, 2024",
    title: "Embracing risks can pave the way to success",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
    type: "image"
  },
  {
    date: "October 23, 2024",
    title: "The single biggest reason why startups succeed",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
    type: "image"
  },
];

export default function StoriesSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <h2 className="text-[32px] text-[#0F4C5C] font-normal mb-16 lg:pl-12">
          Our Stories of Financial<br />Achievement
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <Link 
              href="#" 
              key={index}
              className="group block"
            >
              <article className="relative flex flex-col h-full">
                {/* Content */}
                <div className="flex flex-col mb-3">
                  <time className="text-[13px] text-[#0F4C5C]/60 mb-2">
                    {story.date}
                  </time>
                  <h3 className="text-[15px] text-[#0F4C5C] font-normal leading-snug group-hover:text-[#0F4C5C]/80 transition-colors">
                    {story.title}
                  </h3>
                </div>

                {story.type === "conference" && story.conference ? (
                  // Conference Card
                  <div className="aspect-[3/4] w-full relative rounded-2xl overflow-hidden bg-[#0F4C5C] p-6">
                    <div className="relative z-10">
                      <div className="text-[#9FE870] text-[28px] font-medium mb-1">{story.conference.year}</div>
                      <div className="text-white text-[28px] font-normal leading-tight mb-1">{story.conference.title}</div>
                      <div className="text-white text-[28px] font-normal leading-tight mb-8">{story.conference.location}</div>
                      <div className="text-white/70 text-[15px] mt-auto">{story.conference.footer}</div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute right-0 bottom-0">
                      <div className="absolute bottom-16 right-4 w-32 h-1.5 bg-[#9FE870] transform rotate-45"></div>
                      <div className="absolute bottom-12 right-8 w-32 h-1.5 bg-white/20 transform rotate-45"></div>
                      <div className="absolute bottom-8 right-12 w-32 h-1.5 bg-[#9FE870] transform rotate-45"></div>
                    </div>
                  </div>
                ) : story.type === "image" && story.image ? (
                  // Image Card
                  <div className="aspect-[3/4] w-full relative rounded-2xl overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 