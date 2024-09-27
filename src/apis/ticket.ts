import { getAccessToken } from '../utils/token';
import { ticketInstance } from './instance';

export function getPlayMonitorData() {
  return ticketInstance.get('/all', {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}
