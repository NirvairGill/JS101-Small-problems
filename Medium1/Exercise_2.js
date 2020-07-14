/* Input: number
Output: number

algorithm:
- Convert number into the string.
- Slice the string from index 0 to count, then add string count + 1 to the end plus index count - 1 to count
- convert to number
- */

const rotateRightmostDigits  = (num, count) => {
  let str =  num.toString();
  let sliceIndex = str.length - count;
  return Number(str.slice(0, sliceIndex) + str.slice(sliceIndex + 1) + str.slice(sliceIndex, sliceIndex +1)) 
}



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917