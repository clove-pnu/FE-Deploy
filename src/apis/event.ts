import { eventInstance } from './instance';

export function getEvent(name: string) {
  return eventInstance.get(`/${name}`);
}
