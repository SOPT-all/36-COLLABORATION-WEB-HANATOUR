import http from '@/shared/apis/http';

export const getDiscountRun = async () => {
  const { data } = await http.get('/api/v1/packages/discount-run');
  return data;
};
