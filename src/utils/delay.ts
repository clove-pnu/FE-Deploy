export function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('waiting...');
      resolve('wait');
    }, delay);
  });
}
