import http from '@/shared/apis/http';

export const getFoods = async () => {
  const { data } = await http.get('/api/v1/foods');
  return data;
};
