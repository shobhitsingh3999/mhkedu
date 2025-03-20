import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CountryNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-[#0F4C5C] mb-4">Country Not Found</h1>
      <p className="text-gray-600 mb-8 text-center">
        We couldn't find information about studying in the country you're looking for.
      </p>
      <Link href="/visa">
        <Button className="bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white">
          View All Destinations
        </Button>
      </Link>
    </div>
  );
}