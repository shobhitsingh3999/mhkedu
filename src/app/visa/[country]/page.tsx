import { Metadata, ResolvingMetadata } from 'next';
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
const countryComponents: Record<string, React.ComponentType> = {
  'uk': dynamic(() => import('@/components/countryPages/uk')),
  'usa': dynamic(() => import('@/components/countryPages/usa')),
  'canada': dynamic(() => import('@/components/countryPages/canada')),
  'australia': dynamic(() => import('@/components/countryPages/australia')),
  'new-zealand': dynamic(() => import('@/components/countryPages/newzealand')),
  'europe': dynamic(() => import('@/components/countryPages/europe'))
};

type Props = {
  params: { country: string };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate metadata for the page
export async function generateMetadata(
  props: Props,
): Promise<Metadata> {
  const country = props.params.country;
  
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

// Suppress TypeScript type checking for this component by using "any"
// This is a workaround for the strict type checking in Next.js 15
const CountryPage = (props: Props) => {
  const { country } = props.params;
  
  // Check if the country exists in our mapping
  if (!countryComponents[country]) {
    // If not, show the 404 page
    notFound();
  }
  
  // Get the component for this country
  const CountryComponent = countryComponents[country];
  
  return <CountryComponent />;
};

export default CountryPage;