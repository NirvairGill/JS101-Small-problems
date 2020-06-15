function randomAge(min, max) {
  //further Exploration
  if (min < max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  } else {
    return Math.floor(Math.random() * (min - max) + 1) + max;
  }
  
}

let age = randomAge(120, 21);
console.log(`Teddy is ${age} years old!`);
