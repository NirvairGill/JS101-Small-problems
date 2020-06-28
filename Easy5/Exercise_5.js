/* 
Input: two arrays
Output: Single array

Algo:
- Create a new empty array
- Iterate over concated array for 3 times and for each iteration shift the element 
from each array and push to empty array
*/

function interleave(arr1, arr2) {
  let mixArr = [];

  arr1.forEach((_, ind) => mixArr.push(arr1[ind], arr2[ind]));


  return mixArr;
}

// with map

function interleave(arr1, arr2) {

  return arr1.flatMap((ele, ind) => [ele, arr2[ind]]);
}


//With reduce 

function interleave(arr1, arr2) {
  return arr1.reduce((acc, val, ind) => acc.concat(val, arr2[ind]), [])
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); 