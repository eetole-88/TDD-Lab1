// const translate = (word) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let newWord = "";
//   if (vowels.indexOf(word[0]) > -1) {
//     newWord = word + "way";
//     return newWord;
//   } else {
//     let firstMatch = word.match(vowels / g) || 0;
//     let vowel = word.indexOf(firstMatch[0]);
//     newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
//     return newWord;
//   }
// };

const translate = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0].toLowerCase())) {
    return word.toLowerCase() + "way";
  } else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
    let split = word.split("");
    let first = word[0];
    split.splice(0, 1);
    split.push(first, "a", "y");
    return split.join("");
  } else if (!vowels.includes(word[1]) && vowels.includes(word[2])) {
    let split = word.split("");
    let first = word[0];
    let second = word[1];
    split.splice(0, 2);
    split.push(first, second, "a", "y");
    return split.join("");
  } else if (!vowels.includes(word[2]) && vowels.includes(word[3])) {
    let split = word.split("");
    let first = word[0];
    let second = word[1];
    let third = word[2];
    split.splice(0, 3);
    split.push(first, second, third, "a", "y");
    return split.join("");
  }
};

module.exports = { translate };
