import axios from 'axios';

export async function getJson() {
  if (process.env.NODE_ENV === 'production') {
    return axios.get('http://34.47.117.26/page/deploy/example.json');
  }

  return axios.get('/jsonTest/example.json');
}
