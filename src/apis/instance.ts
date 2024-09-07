import axios from 'axios';

export const deployInstance = axios.create({
  baseURL: '/deploy',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
