import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Abroad Destinations | Study Abroad Consulting',
  description: 'Explore top study abroad destinations including UK, USA, Canada, Australia, New Zealand, and Europe. Get expert guidance on admissions, visas, and more.'
};

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
}

const destinations: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    image: 'https://cdn.pixabay.com/photo/2015/02/12/15/47/london-633880_1280.jpg',
    description: 'Experience world-class education in one of the most prestigious academic destinations.',
    color: '#0F4C5C',
  },
  {
    id: 'usa',
    name: 'United States',
    image: 'https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718_1280.jpg',
    description: 'Access to cutting-edge research and innovation in a diverse academic environment.',
    color: '#14BDEB',
  },
  {
    id: 'canada',
    name: 'Canada',
    image: 'https://cdn.pixabay.com/photo/2016/04/01/00/08/toronto-1298016_1280.jpg',
    description: 'Quality education with post-graduation work permits and immigration pathways.',
    color: '#0D7377',
  },
  {
    id: 'australia',
    name: 'Australia',
    image: 'https://cdn.pixabay.com/photo/2023/04/06/23/10/skyscrapers-7905232_1280.jpg',
    description: 'World-renowned universities with a focus on innovation and research.',
    color: '#0F4C5C',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    image: 'https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_1280.jpg',
    description: 'High-quality education in a safe, welcoming and breathtaking environment.',
    color: '#14BDEB',
  },
  {
    id: 'europe',
    name: 'Europe',
    image: 'https://cdn.pixabay.com/photo/2020/08/08/18/58/florence-5473716_1280.jpg',
    description: 'Diverse study options across multiple countries with rich cultural experiences.',
    color: '#0D7377',
  }
];

export default function VisaDestinations() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2015/02/12/15/47/london-633880_1280.jpg"  // Replace with your image
            alt="World Map Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Study Abroad Destinations
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Explore our comprehensive guides to studying in top destinations around the world. Find information on universities, courses, visas, and post-study opportunities.
            </p>
          </div>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link 
                href={`/visa/${destination.id}`}
                key={destination.id}
                className="group block"
              >
                <div 
                  className="relative rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2 h-full"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={destination.image}  
                      alt={`Study in ${destination.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                      style={{ backgroundImage: `linear-gradient(to top, ${destination.color}DD, transparent)` }}
                    ></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{destination.name}</h3>
                        <p className="text-white/90">{destination.description}</p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white group-hover:bg-white group-hover:text-[#0F4C5C] transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C5C] mb-4">
              Need Help Choosing Your Destination?
            </h2>
            <p className="text-gray-600 mb-8">
              Our expert advisors can help you select the perfect destination based on your academic goals, budget, and career aspirations.
            </p>
            <Link href="/contact">
              <button className="bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white font-medium rounded-full py-3 px-8 text-lg transition-colors duration-300">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}