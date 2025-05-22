import { useQuery } from '@tanstack/react-query';
import { getMyCountry } from './getMyCountry';

export const useGetMyCountry = () => {
  return useQuery({
    queryKey: ['myCountry'],
    queryFn: getMyCountry,
  });
};
