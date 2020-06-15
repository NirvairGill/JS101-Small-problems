function neutralize(sentence) {
  let words = sentence.split(" ");
  let arr =[];

  words.forEach(word => {
    if (!isNegative(word)) {
      // const index = words.indexOf(word);
      // words.splice(index, 1);
      arr.push(word)
    }
  });
  return arr.join(" ");
};


function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

/* The `forEach()` method iterates over the array less or exact number of times arrays length.
In this case, we're eliminating elements from the array during iteration. When `if` condition 
is truthy for the the word `dull`, the `splice()` method takes it out of the `words` array.
Because the `boring` comes at index place of `dull` now, the `forEach()` will skip the word `boring` 
which is on index position `1`. This code demonstrates that mutation of array while iterating could result 
in unexpected behaviours.

To fix this issue, we can create an empty array and change the `if` condition. We can use `.push()` method to 
push words into empty array those satisfies if condition.  */