import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getUsers = () => api.get('/api/users').then(({ data }) => data);

export const getUserById = (id) =>
  api.get(`/api/users/${id}`).then(({ data }) => data);

export const updateUser = ({ id, ...updatedUser }) => {
  return api.put(`/api/users/${id}`, updatedUser).then(({ data }) => data);
};
