export async function retry(fn, retries = 3, delay = 500) {
  try {
    return await fn();
  } catch (err) {
    console.warn(`Intento fallido. Reintentos restantes: ${retries}`);
    if (retries === 0) throw err;
    await delayFn(delay);
    return retry(fn, retries - 1, delay * 2);
  }
}

const delayFn = (ms) => new Promise(res => setTimeout(res, ms));
