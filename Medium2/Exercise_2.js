const isValid = (side1, side2, side3) => {
  let sorted = [side1, side2, side3].sort()
  return sorted[0] + sorted[1] > sorted[2];
}


const triangle = (side1, side2, side3) => {
  if((!side1 || !side2 || !side3) || !isValid(side1, side2, side3)) {
    return 'Invalid';
  } else if((side1 === side2) && (side2=== side3)) {
    return 'equilateral';
  } else if(side1 === side2 || side2 === side3 || side1 === side3) {
    return'isosceles';
  } else {
    return 'scalene';
  }
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"