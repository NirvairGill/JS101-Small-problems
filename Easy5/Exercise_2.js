/* Input: Nested Array 
Output: An array 

algo:
-Create a new empty array
- Concat both arguments into an array
- Iterate over array and see if new array contains current element
- if it not, push element to new array
- return final array

*/

function union(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.reduce((acc, val) => {
    if(acc.indexOf(val) < 0) {
      acc.push(val);
    }
    return acc;
  }, []);

}



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]