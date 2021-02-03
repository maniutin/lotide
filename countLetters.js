const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence){
let counter = {}
let trimmedSentence = sentence.split(' ').join('');
for (const letter of trimmedSentence){
  if (counter[letter]){
    counter[letter] += 1;
  } else {
    counter[letter] = 1;
  }

}
return counter;
}

const result = countLetters("lighthouse in the house")
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);
//console.log(countLetters("lighthouse in the house"))
// create an empty object
// iterate over the sentence
// push values into the object
// calculate the instances of each letter