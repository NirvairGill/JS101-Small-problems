const swapName = str => {
  return str.replace(/(^\w+\s*\w*\s*\w*)\s(\w+$)/, '$2, $1')
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"