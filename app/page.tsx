'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from '@/components/Header/Header';
import Main from './main/components/Main/Main';
import Footer from '@/components/Footer/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <Main />
      <Footer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
