/* 
Algo:
- Create an empty object.
- Check the length of string if 0 then return object.
- Split string into array of words
- create a new array
- check each word for alphanumeric
  -- clean up the word and send it to new array
  -- send the word into array.
- iterate through array with reduce
- check the length of the word.
- If the length already exist in object r1 else + 1
- Return object
*/

function wordSizes(str) {
  if(str.length === 0) return {};
  
  let arr = str.split(' ');
  let cleanedArr = [];
  for(let index = 0; index < arr.length; index += 1) {
    cleanedArr.push(cleanWord(arr[index]))
  };
  return cleanedArr.reduce((obj, word) => {
    let length = word.length;
    obj[length] = obj[length] ? obj[length] + 1: 1;
    return obj;
  }, {});

}

function isAlphabet(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function cleanWord(word) {
  let cleanedWord = '';
  for(let index = 0; index < word.length; index += 1) {
    if(isAlphabet(word[index])) {
      cleanedWord += word[index];
    };
  };
  return cleanedWord;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}