import http from '@/shared/apis/http';

export const getMyCountry = async () => {
  const { data } = await http.get('/api/v1/my');
  return data;
};
