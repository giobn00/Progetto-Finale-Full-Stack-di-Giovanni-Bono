//import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

export function useFoodPages({ foodId } = {}) {
  const { data, error, ...props } = useSWR(
    `/api/foods/${foodId}`,
    fetcher
  );

  const isLoading = !data && !error;
  
  return {
    data,
    error,
    isLoading,
    ...props,
  };
}
