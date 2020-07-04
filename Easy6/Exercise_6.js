const sequence = num => {
  let arr = [];
  while (num > 0) {
    arr.unshift(num);
    num -= 1;
  }

  return arr;
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]