let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eveniet commodi, possimus veritatis non id inventore ipsam voluptas itaque error nobis totam consequatur praesentium nam consectetur pariatur deleniti odit quae, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eveniet commodi, possimus veritatis non id inventore ipsam voluptas itaque error nobis totam consequatur praesentium nam consectetur pariatur deleniti odit quae odit';

// TODO: write a function to split a string into an array of words

const words = (string) => {
  return string
  .replace(/[.,]/g,'')
  .split(' ')
}

// This should print the length of the words array returned
console.log(words(lorem).length);
console.log(words(lorem));

// TODO: write a function to count the number of occurrences of each word

const wordFrequency = (array) => {
  const myObj = {};
  for (let word of array) {
    if (!myObj[word]) {
      myObj[word] = 1;
    } else {
      myObj[word]++;
    }
  }
  return myObj;
}

// This should print an object containing all words and their occurrences
console.log(wordFrequency(words(lorem)));
