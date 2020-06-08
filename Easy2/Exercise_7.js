const xor = (a, b) => {
  return (a || b) && !(a && b);
}




console.log(xor(5, 0))
console.log(xor(false, true))
console.log(xor(1, 5))
console.log(xor(true, true));