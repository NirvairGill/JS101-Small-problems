//input: string
// output: string

// define a function and inside body of a function 
// add the pattern + -.repeat(strlenght + 2)  +
// console.log it

function logInBox(str) {
  let topBottomBorder = '+' + ('-').repeat(str.length + 2) + '-+';
  let emptyLine = '| ' + (' ').repeat(str.length + 2) + '|';

  console.log(topBottomBorder);
  console.log(emptyLine);
  console.log('| ' + str + '  |');
  console.log(emptyLine);
  console.log(topBottomBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// Further exploration

function logInBoxSliced (str, width) {
  let topBottomBorder = '+' + ('-').repeat(width + 1) + '-+';
  let emptyLine = '| ' + (' ').repeat(width) + ' |';

  console.log(topBottomBorder);
  console.log(emptyLine);
  console.log('| ' + str.slice(0, width) + ' |');
  console.log(emptyLine);
  console.log(topBottomBorder);

}

logInBoxSliced('To boldly go where no one has gone before.', 32);

