import axios from 'axios';
import { getAccessToken } from '../utils/token';
import { eventInstance } from './instance';

export function getEvent(name: string) {
  return eventInstance.get(`/${name}`);
}

export function getEventList() {
  return eventInstance.get('');
}

export function deployEvent({
  data,
  namespace,
}: {
  data: FormData,
  namespace: string,
}) {
  return axios.post(`/${namespace}/event`, data, {
    timeout: 10000,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: getAccessToken(),
    },
  });
}
