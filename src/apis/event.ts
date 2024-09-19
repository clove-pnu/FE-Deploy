import { getAccessToken } from '../utils/token';
import { eventInstance } from './instance';

export function getEvent(name: string) {
  return eventInstance.get(`/${name}`);
}

export function getEventList() {
  return eventInstance.get('');
}

export function deployEvent(data: FormData) {
  return eventInstance.post('', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: getAccessToken(),
    },
  });
}
