import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';

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

// Use the new Promise-based props pattern from Next.js 15
type Props = {
  params: Promise<{ country: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate metadata for the page with the new Promise-based params
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // Read the route params
  const { country } = await params;
  
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

// Page component with the new Promise-based params pattern
export default async function CountryPage({ params }: Props) {
  // Await the Promise to get the actual params
  const { country } = await params;
  
  // Check if the country exists in our mapping
  if (!countryComponents[country]) {
    // If not, show the 404 page
    notFound();
  }
  
  // Get the component for this country
  const CountryComponent = countryComponents[country];
  
  return <CountryComponent />;
}