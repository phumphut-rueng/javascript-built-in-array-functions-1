let words = ["hello", "world"];

function getWordLengths(words) {
  const countWord =  words.map((words) => words.length)
  return countWord
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
