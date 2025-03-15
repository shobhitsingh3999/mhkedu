const stats = [
  {
    value: "8+",
    description: "Visa Categories"
  },
  {
    value: "940+",
    description: "Visa Applications"
  },
  {
    value: "940+",
    description: "Visa Applications"
  },
  {
    value: "4.8",
    description: "Reviews"
  }
];

export default function StatsBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col">
                <h3 className="text-[48px] leading-none font-normal text-[#1A2B3C] mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-[#1A2B3C]/80">
                  {stat.description}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-16 bg-slate-200 mx-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 