'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

let queryClientSingleton: QueryClient | null = null

function getQueryClient() {
  if (!queryClientSingleton) {
    queryClientSingleton = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, 
        },
      },
    })
  }
  return queryClientSingleton
}

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}