const fibonacci = num => {
  if(num === 1) return 1;
  let sum = 0;
  let num1 = 0;
  let num2 = 1;
  for (let index = 1; index < num ; index += 1) {
    sum  = num1 + num2;

    num1 = num2;
    num2 = sum;
  }

return sum;
}

console.log(fibonacci(1));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050