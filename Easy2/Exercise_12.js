const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const integerToString = num => {
  let str = '';

  while (num > 0) {
    str = DIGITS[num % 10] + str;
    num = Math.floor(num / 10);
  }

  return str;
};

const signedIntegerToString = num => {
  if (num === 0) return '0';

  switch (Math.sign(num)) {
    case -1:
      return '-' + integerToString(num * -1);
      break;

    case 1:
      return '+' + integerToString(num);

    default:
      return integerToString(num);
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");