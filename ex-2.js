let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  const morethanFive = words.filter((word) => word.length >=  5)
  return morethanFive
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
