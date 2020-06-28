// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.




/* 
Input: array
output: string


Algo: 
- Create an empty string
- sort the array with length strarting from smaller to larger
- Check the length of the first element of orted array and store into a variable
- Create an empty array
- Iterate through the original array. For each iteration, from each element, push the value at given index number.
- check if all the values in the new array are  equal
- if yes, add that value to empty str.
- Increment the index.
- return the string
*/ 

const commonPrefix = arr => {
  arr = arr.sort((a, b) => a.length - b.length)
  let str = '';
  let wordLength = arr[0].length;
  let index = 0;
  while (index < wordLength) {
    let newArr = [];
    arr.forEach(word => newArr.push(word[index]));
    if(newArr.every(char => char === arr[0][index])){
      str += arr[0][index];
    }
    index += 1;
  }
return str;
}




console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
console.log(commonPrefix(["throne","dungeon"]) === ""); // true
console.log(commonPrefix(["throne","throne"]) === "throne"); // true