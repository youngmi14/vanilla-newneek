'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GroundFeed from './components/GroundFeed/GroundFeed';
import * as styles from './page.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        {/* <StartNewNeek /> */}
        <GroundFeed />
        {/* <SideMenu /> */}
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
