import { get, post, put, patch, uploadFile } from '@/shared/utils/http';
import { CLIENT_ID, CLIENT_SECRET } from '@/shared/constants/env';

export const checkInviteCode = code => post('api/v2/registration-codes/validate', { code });
export const registerUser = data => post('api/v2/users/register', data);
export const login = data => post('/oauth/token', Object.assign({}, data, {
  grant_type: 'password',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  scope: '*',
}));
export const fetchProfile = () => get('api/v2/users/me');
export const updateProfile = data => put('api/v2/users/me', data);
export const fetchProfileFields = () => get('api/v2/users/me/profile');
export const updateProfileFields = data => put('api/v2/users/me/profile', data);

export const fetchUsers = () => get('api/v2/users');
export const fetchUser = id => get(`api/v2/users/${id}`);
export const updateUser = user => patch(`api/v2/users/${user.id}`, user);
export const uploadAvatar = avatar => uploadFile('api/v2/users/me/avatar', avatar);
