import { get, post, patch } from '@/shared/utils/http';
import { CLIENT_ID, CLIENT_SECRET } from '@/shared/constants/env';

export const registerUser = data => post('api/users', data);
export const login = data => post('/oauth/token', Object.assign({}, data, {
  grantType: 'password',
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: '*',
}));
export const fetchProfile = () => get('api/v1/me');

export const fetchUsers = () => get('api/v1/users');
export const fetchUser = id => get(`api/v1/users/${id}`);
export const updateUser = user => patch(`api/v1/users/${user.id}`, user);
