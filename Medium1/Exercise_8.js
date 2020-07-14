let obj = {1 : 1, 2 : 1};
const fibonacci = num => {
  
  for (let index = 3; index <= num; index += 1) {
    obj[index] = obj[index - 1] + obj[index - 2];
  }
return obj[num];
}


console.log(fibonacci(1));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
