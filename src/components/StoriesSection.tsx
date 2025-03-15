import Image from "next/image";
import Link from "next/link";

interface Conference {
  year: string;
  title: string;
  location: string;
  footer: string;
}

interface Story {
  title: string;
  type: "image" | "conference";
  image?: string;
  conference?: Conference;
  description: string;
}

const stories: Story[] = [
  {
    title: "Dedicated Client Support",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    type: "image",
    description: "Our dedicated support team is always ready to address your questions and provide expert guidance on the best career-oriented preparation options tailored to your goals at Abroad Dreams Consultant."
  },
  {
    title: "Global Networks",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlcyUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    type: "image",
    description: "We deliver exceptional results globally, guiding individuals with expert immigration solutions to achieve their aspirations both in India and internationally."
  },
  {
    title: "Professional Trainer",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
    type: "image",
    description: "We understand the importance of your educational journey and offer expert trainers to ensure your career advancement through quality learning opportunities."
  },
  {
    title: "True To Our Value",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
    type: "image",
    description: "We take pride in offering expert advice, bringing unmatched knowledge and experience to ensure the best outcome for your study and immigration goals."
  },
];

export default function StoriesSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <h2 className="text-[32px] text-[#0F4C5C] font-normal mb-16 lg:pl-12">
        Why Choose Us?
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
                    
                    {/* Description with blurred background */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm">
                        {story.description}
                      </p>
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
                    
                    {/* Description with blurred background */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm">
                        {story.description}
                      </p>
                    </div>
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