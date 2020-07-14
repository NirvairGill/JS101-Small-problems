

const rotateString = str => {
  return str.slice(1) + str[0];
}
const rotateRightmostDigits = (num, count) => {
  let string = String(num);
  let slicedLength = string.length - count;
  let firstPart = string.slice(0, slicedLength);
  let secondPart = string.slice(slicedLength);
  let result = firstPart + rotateString(secondPart);
  return String(result);
}

const maxRotation = num => {
  let str = String(num);
  let result = ''
  for(let index = 0; index < str.length; index += 1) {
    str = rotateRightmostDigits(str, str.length - index);
    result += str.slice(index, index+1)
  }
  return Number(result);
}





console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


