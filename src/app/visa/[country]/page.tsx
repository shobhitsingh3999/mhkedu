import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Country name mapping
const countryNames: Record<string, string> = {
  'uk': 'United Kingdom',
  'usa': 'United States',
  'canada': 'Canada',
  'australia': 'Australia',
  'new-zealand': 'New Zealand',
  'europe': 'Europe'
};

// Define dynamic imports for all country components
const countryComponents = {
  'uk': dynamic(() => import('@/components/countryPages/uk')),
  'usa': dynamic(() => import('@/components/countryPages/usa')),
  'canada': dynamic(() => import('@/components/countryPages/canada')),
  'australia': dynamic(() => import('@/components/countryPages/australia')),
  'new-zealand': dynamic(() => import('@/components/countryPages/newzealand')),
  'europe': dynamic(() => import('@/components/countryPages/europe'))
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { country: string };
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const country = params.country;
  
  // If this country doesn't exist in our mapping, use a default
  const countryName = countryNames[country] || 'Abroad';
  
  return {
    title: `Study in ${countryName} | Study Abroad Consulting`,
    description: `Complete guide to studying in ${countryName} - visa requirements, top universities, popular courses, and post-study work opportunities.`
  };
}

// Function to generate static paths for all countries
export function generateStaticParams() {
  return Object.keys(countryNames).map(country => ({
    country,
  }));
}

// Country page component
export default function CountryPage({
  params,
}: {
  params: { country: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const { country } = params;
  
  // Check if the country exists in our mapping
  if (!countryComponents[country as keyof typeof countryComponents]) {
    // If not, show the 404 page
    notFound();
  }
  
  // Get the component for this country
  const CountryComponent = countryComponents[country as keyof typeof countryComponents];
  
  return <CountryComponent />;
}