import Image from "next/image";
import { Button } from "@/components/ui/button";

const checklistItems = [
  "Lorem ipsum dolor sit",
  "Probo ad nostrud",
  "Fabell sed mea",
  "Lorem ipsum dolor",
  "Nusquam explicar"
];

export default function AnalysisSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#0A3845] min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center py-24">
        {/* Left side - Image */}
        <div className="relative h-[600px] w-full">
          {/* Image with gradient overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Team meeting with whiteboard"
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
          <h2 className="text-[56px] font-light mb-16 leading-[1.2]">
          Excellence in <span className="text-[#9FE870] font-normal">Visa Services</span>
          </h2>

          <div className="space-y-6 mb-16">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#9FE870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-light">{item}</span>
              </div>
            ))}
          </div>

          <Button 
            className="h-14 px-8 bg-white hover:bg-white/90 text-[#0F4C5C] rounded-full text-base font-normal"
          >
            Free consultation
          </Button>
        </div>
      </div>
    </section>
  );
} 