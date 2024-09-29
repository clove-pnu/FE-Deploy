export function NumberToMoney(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function MoneyToNumber(s: string) {
  return s.replace('/,/g', '');
}

export async function urlToBlob(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data = await response.blob();
  const ext = response.headers.get('Content-Type').split('/')[1];

  return {
    data,
    ext,
  };
}
