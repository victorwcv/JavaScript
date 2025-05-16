/* Description:
Write a function countVowels that receives a string and returns the number of vowels (a, e, i, o, u) it contains.
Count both uppercase and lowercase vowels. */

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let numOfVowels = 0;

  for (const character of str) {
    const normalize = character.toLowerCase();
    if (vowels.has(normalize)) numOfVowels += 1;
  }

  return numOfVowels;
}

const a = countVowels("Hello World"); // 3 (e, o, o)
const b = countVowels("JavaScript"); // 3 (a, a, i)
const c = countVowels("Victor William Ccanchi Vasquez");
const d = countVowels("loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae quo quidem quam a? Laborum fugit cumque, est iusto illo sit explicabo fuga quibusdam distinctio? Distinctio voluptatem quis deleniti ea")

const results = [a, b, c, d];

results.forEach((r) => console.log(r));
