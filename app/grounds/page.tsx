'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <div>그룹</div>
      <Footer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
