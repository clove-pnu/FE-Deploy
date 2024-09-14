import axios from 'axios';

export const deployInstance = axios.create({
  baseURL: '/deploy',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const eventInstance = axios.create({
  baseURL: '/event',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
