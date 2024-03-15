function isPalindromio(str) {
  const newStr = str.split("").reverse().join("");
  return str === newStr;
}

isPalindromio("reconocer");

//----------------------------------------------------------------

function caracterMasRepetido(str) {
  const letterMap = {};
  let maxValor = -Infinity;
  let maxLetter = [];

  for (const letter of str) {
    letterMap[letter] = (letterMap[letter] || 0) + 1;
    if (maxValor < letterMap[letter]) {
      maxValor = letterMap[letter];
      maxLetter = [letter];
    } else if (maxValor === letterMap[letter]) {
      maxLetter.push(letter);
    }
  }
  return maxLetter;
}

caracterMasRepetido("onomatopeya");

// -----------------------------------------------------------------

function chunk(array, size) {
  const newArray = [];
  for (let i = 0; i < array.length; i += size) {
    let x = array.slice(i, size + i);
    newArray.push(x);
  }

  return newArray;
}

chunk([1, 2, 3, 4, 5], 2);

// ---------------------------------------------------------------------

function capitalize(str) {
  let capitalized = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");

  return capitalized;
}

capitalize("Lorem ipsum dolor sit blandit lobortis ante.");

// ---------------------------------------------------------------------

function anagrams(stringA, stringB) {
  function clean(str) {
    let strCleanned = str
      .toLowerCase()
      .replace(/[\W]/g, "")
      .split("")
      .sort()
      .join("");

    return strCleanned;
  }

  const cleanStringA = clean(stringA);
  const cleanStringB = clean(stringB);

  return cleanStringA === cleanStringB;
}

anagrams("coding money!!!!", "money coding");

//---------------------------------------------------------------------------

function vowels(str) {
  let vowelcount = (str.match(/[aeiou]/gi) || []).length;

  return vowelcount;
}

vowels("Cdng Mny");

// --------------------------------------------------------------------------

function fizzBuzz(n) {
  let x;
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? (x = "fizzbuzz")
      : i % 3 === 0
      ? (x = "fizz")
      : i % 5 === 0
      ? (x = "buzz")
      : (x = i);

    console.log(x);
  }
}

// fizzBuzz(15);

// --------------------------------------------------------------------------

function steps(n) {
  if (typeof n !== "number" || n < 1)
    return console.log("it's not a valid entry");
  for (let i = 1; i <= n; i++) {
    let step = "#".repeat(i).padEnd(n, " ");
    console.log(step);
  }
}

// steps(9);

//--------------------------------------------------------------------------

function pyramid(n) {
  if (typeof n !== "number" || n < 1) {
    console.log("it's not a valid entry");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + (n - 1); j++) {
      if (j <= n - i || j >= n + i) row += " ";
      else row += "#";
    }
    console.log(row);
  }
}

// pyramid(9);

// --------------------------------------------------------------------------------

function array(n) {
  const matrix = [];
  let count = 1;
  for (let row = 1; row <= n; row++) {
    const subMatrix = [];

    for (let num = 1; num <= n; num++) {
      subMatrix.push(count);
      count++;
    }
    matrix.push(subMatrix);
  }
  return matrix;
}

// console.log(array(4));

// --------------------------------------------------------------------------

function matrix(n) {
  const result = [];
  let counter = 1,
    starRow = 0,
    endRow = n - 1,
    starCol = 0,
    endCol = n - 1;
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while(starRow<=endRow && starCol<=endCol){
    // Top
  for (let i = starCol; i <= endCol; i++ ) {
    result[starRow][i] = counter;
    counter++;
  }
  starRow++;

  // Right
  for (let i = starRow; i <= endRow; i++ ) {
    result[i][endCol] = counter;
    counter++;
  }
  endCol--;

  // Bottom
  for (let i = endCol; i >= starCol; i-- ) {
    result[endRow][i] = counter;
    counter++;
  }
  endRow--;

  // Left
  for (let i = endRow; i >= starRow; i-- ) {
    result[i][starCol] = counter;
    counter++;
  }
  starCol++;
  }


 return result;
}

console.log(matrix(10));

