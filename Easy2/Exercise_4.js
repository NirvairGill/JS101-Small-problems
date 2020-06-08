const multiply = (num1, num2) => num1 * num2;
const square = num => multiply(num, num);
const powerToNum = (num, power) => {
  let product = 1;
  while (power > 0) {
   product = multiply(product, num);
     power -= 1;
  }
  return product;
  }
    






console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
console.log(powerToNum(2, 5));