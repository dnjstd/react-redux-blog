import client from './client';
//api를 활용하기 쉽게 함수화

//login
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

//register
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

//로그인 상태 확인
export const check = () => client.get('/api/auth/check');
