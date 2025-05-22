import { useQuery } from '@tanstack/react-query';
import { getFoods } from './getFoods';

export const useGetFoods = () => {
  return useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  });
};
