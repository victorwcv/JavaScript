/* Description:
Write a function firstUniqueChar that receives a string and returns the first character that is not repeated.
If no unique character exists, return null. */

function firstUniqueChar(str = "") {
  if (!typeof str === "string") {
    throw new Error(`we espect an string instead we got a: ${typeof str}`);
  }

  let currentChar = str[0]

  for (const char of str) {
    if (char !== currentChar) return char;
    currentChar = char;
  }

  return null;
}

const results = [
  firstUniqueChar("aabccddeff"), // "b"
  firstUniqueChar("aabbcc"), // null
  firstUniqueChar("racecars"), // "e"
];

results.forEach(r => console.log(r))