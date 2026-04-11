import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    
        // cacheTime: 10_000,
        // refetchOnWindowFocus: false,
    }
  }
});