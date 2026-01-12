import { createClient } from 'next-sanity';
import { sanityConfig } from './config';

export const client = createClient(sanityConfig);

// Helper function to fetch data
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
      tags,
    },
  });
}
