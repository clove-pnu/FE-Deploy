import axios from 'axios';
import { getAccessToken } from '../utils/token';

export function getEvent(namespace: string) {
  return axios.get(`/${namespace}/event`);
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
