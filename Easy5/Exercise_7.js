/* Input: two arrays
Output: array

algo: 
- initailize a new array
- loop through one array and for each iteration push the product of similar index
element of both arrays to new array
- return the initialized array.
*/


// function multiplyList(arr1, arr2) {
//   let arr = [];
  
//  for(let index = 0; index < arr1.length; index += 1) {
//     arr.push(arr1[index] * arr2[index]);
//   }

//   return arr;
// }

//Using map

function multiplyList(arr1, arr2) {
  return arr1.map((ele, ind) => (ele * arr2[ind]))
}

// using reduce
function multiplyList(arr1, arr2) {
  return arr1.reduce((acc, val, ind) => acc.concat(val * arr2[ind]), [])
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));