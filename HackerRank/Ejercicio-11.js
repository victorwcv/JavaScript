function designerPdfViewer(h, word) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const obj = Object.fromEntries(abc.map((item, index)=> [item, h[index]]));
  let length = word.length;
  let word2 = word.split('');
  let max = -Infinity;
  for (let i = 0; i < length; i++) {
    if (obj[word2[i]] > max) {
      max = obj[word2[i]];
    }
  }
  return  max*length
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc');