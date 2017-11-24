import { get, post } from '@/shared/utils/http';

export const registerUser = data => post('api/users', data);
export const login = data => post('/oauth/token', Object.assign({}, data, {
  grantType: 'password',
  clientId: '1',
  clientSecret: 'uJrcxY2UspB3iajG3wrLjUEpurZM5k2538PMgDcz',
  scope: '*',
}));
export const fetchProfile = () => get('api/users/me');
