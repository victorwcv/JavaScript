setTimeout(() => console.log('timeout'), 0);

queueMicrotask(() => console.log('microtask'));

Promise.resolve().then(() => console.log('promise'));

console.log('sync');
