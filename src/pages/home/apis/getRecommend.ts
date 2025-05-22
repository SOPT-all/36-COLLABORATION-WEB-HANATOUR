import http from '@/shared/apis/http';

export const getRecommend = async () => {
  const { data } = await http.get('/api/v1/recommend');
  return data;
};
