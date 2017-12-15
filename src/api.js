import { get, post } from '@/shared/utils/http';
import { CLIENT_ID, CLIENT_SECRET } from '@/shared/constants/env';

export const registerUser = data => post('api/users', data);
export const login = data => post('/oauth/token', Object.assign({}, data, {
  grantType: 'password',
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: '*',
}));
export const fetchProfile = () => get('api/users/me');
