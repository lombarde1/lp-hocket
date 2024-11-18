import { Suspense } from 'react';
import ClientLayout from '@/components/ClientLayout';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClientLayout />
    </Suspense>
  );
}