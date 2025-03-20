import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Country name mapping
const countryNames: Record<string, string> = {
  'uk': 'United Kingdom',
  'usa': 'United States',
  'canada': 'Canada',
  'australia': 'Australia',
  'new-zealand': 'New Zealand',
  'europe': 'Europe'
};

// Define a proper type for the dynamically imported components
type DynamicComponent = ComponentType<object>;

// Define dynamic imports for all country components
const countryComponents: Record<string, DynamicComponent> = {
  'uk': dynamic(() => import('@/components/countryPages/uk'), { ssr: true }),
  'usa': dynamic(() => import('@/components/countryPages/usa'), { ssr: true }),
  'canada': dynamic(() => import('@/components/countryPages/canada'), { ssr: true }),
  'australia': dynamic(() => import('@/components/countryPages/australia'), { ssr: true }),
  'new-zealand': dynamic(() => import('@/components/countryPages/newzealand'), { ssr: true }),
  'europe': dynamic(() => import('@/components/countryPages/europe'), { ssr: true })
};

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { country: string } 
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
export async function generateStaticParams() {
  return Object.keys(countryNames).map(country => ({
    country,
  }));
}

// Country page component
export default function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const { country } = params;
  
  // Check if the country exists in our mapping
  if (!countryComponents[country]) {
    // If not, show the 404 page
    notFound();
  }
  
  // Get the component for this country
  const CountryComponent = countryComponents[country];
  
  return <CountryComponent />;
}