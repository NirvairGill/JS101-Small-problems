/* Input: String
Output: object

Algo:
- Create an empty object
- split the string into array of words by spcaes
- Iterate through array, assign length of the word as key, occurance as the value
- check object key alreay exist, if yes add + 1;
-return object
*/

function wordSizes(str) {
  let object = {};
  if (str.length === 0) return object;
  let arr = str.split(' ');

  for (let index = 0; index < arr.length; index += 1) {
    if (Object.keys(object).includes(String(arr[index].length))) {
      object[arr[index].length] += 1;
    } else {
      object[arr[index].length] = 1;
    }
  }

  return object;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}