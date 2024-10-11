import axios from 'axios';

export function NumberToMoney(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function MoneyToNumber(s: string) {
  return s.replace('/,/g', '');
}

export async function urlToBlob(url: string) {
  try {
    const response = await axios.get(url, {
      responseType: 'blob',
    });

    const ext = response.headers['content-Type'].split('/')[1];

    return {
      data: response.data,
      ext,
    };
  } catch (error) {
    return null;
  }
}
