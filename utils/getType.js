
export function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export const isArray = val => getType(val) === 'Array';
export const isObject = val => getType(val) === 'Object';
export const isFunction = val => getType(val) === 'Function';
export const isNull = val => getType(val) === 'Null';

console.log(getType([]));           // "Array"
console.log(getType({}));           // "Object"
console.log(getType(() => {}));     // "Function"
console.log(getType(new Date()));   // "Date"
console.log(getType(null));         // "Null"