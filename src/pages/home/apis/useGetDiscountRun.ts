import { useQuery } from '@tanstack/react-query';
import { getDiscountRun } from './getDicountRun';

export const useGetDiscountRun = () => {
  return useQuery({
    queryKey: ['discountRun'],
    queryFn: getDiscountRun,
  });
};
