/* 
algo:
-if num is less than 2 and greater than 0 return 1
 
*/

const fibonacci = num => {
  if (num === 1 || num === 2) {
    return 1;
  }
  
  return fibonacci(num - 1) + fibonacci(num -2);

}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765