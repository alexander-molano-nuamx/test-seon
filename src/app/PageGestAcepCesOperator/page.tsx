"use client";

import dynamicImport from 'next/dynamic';

// Dynamically import the page content to prevent SSR issues with @nuam library
const PageContent = dynamicImport(() => import('./PageContent'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// Force dynamic rendering to prevent SSR issues
export const dynamic = 'force-dynamic';

export default function PageGestAcepCesPage() {
  return <PageContent />;
}
