/* 
- create an empty array
- Iterate through first array
  -- for every element, iterate through second array.
- for each element multiply first element of first array and push to the empty array.
- Sort the result array.
*/

const multiplyAllPairs = (arr1, arr2) => {
  let arr = [];
  arr1.forEach(ele1 => {
    arr2.forEach(ele2 => arr.push(ele1 * ele2))
  });

  return arr.sort((a,b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));