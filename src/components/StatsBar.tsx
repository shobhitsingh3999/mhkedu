import { TrendingUp, Users, FileCheck, Star } from "lucide-react";

const stats = [
  {
    value: "8+",
    description: "Visa Categories",
    icon: <FileCheck className="w-6 h-6 text-[#1A2B3C]/70" />,
  },
  {
    value: "940+",
    description: "Visa Applications",
    icon: <TrendingUp className="w-6 h-6 text-[#1A2B3C]/70" />,
  },
  {
    value: "340+",
    description: "Success Stories",
    icon: <Users className="w-6 h-6 text-[#1A2B3C]/70" />,
  },
  {
    value: "5.0",
    description: "Reviews",
    icon: <Star className="w-6 h-6 text-[#1A2B3C]/70" />,
  },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats Card */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-[#E5F9E0]/50">
            {/* Stats content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/70 transition-colors duration-300"
                  >
                    <div className="mb-3 p-3 rounded-full bg-[#E5F9E0]/50">
                      {stat.icon}
                    </div>
                    <h3 className="text-[42px] md:text-[48px] leading-none font-normal text-[#1A2B3C] mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-medium text-[#1A2B3C]/80">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
