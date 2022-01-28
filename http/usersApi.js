import axios from 'axios';
const dev = process.env.NODE_ENV !== 'production';
const baseURL = dev
  ? 'http://localhost:3000/'
  : 'https://react-query-test-omega.vercel.app';

const api = axios.create({
  baseURL,
});

export const getUsers = () => api.get('/api/users').then(({ data }) => data);

export const getUserById = (id) =>
  api.get(`/api/users/${id}`).then(({ data }) => data);

export const updateUser = ({ id, ...updatedUser }) => {
  return api.put(`/api/users/${id}`, updatedUser).then(({ data }) => data);
};
