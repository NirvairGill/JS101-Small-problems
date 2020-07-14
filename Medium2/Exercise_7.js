/* 
Input: Array 
Output: Mutated Array

Algo:
- Loop throgh the given array from index 1 to length -1
- compare index -1 with current index
- If index - 1 value > current index value, swap index -1 value  with current index value
- return the end result
*/


const bubbleSort = arr => {
  while (true) {
    let swapped = false;
   for(let index = 1; index < arr.length; index += 1) {
     if(arr[index - 1] > arr[index]) {
       [arr[index -1], arr[index]] = [arr[index], arr[index - 1]]
       swapped = true;
      }      
    }
    if(!swapped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]