let readLine = require('readline-sync');
console.log('Enter the length of the room:')
const roomLength = Number(readLine.prompt());
console.log('Enter the width of the room:')
const roomWidth = Number(readLine.prompt());
console.log('Type m if inputs are in meters oR f if in feet:')
const inputType = readLine.prompt();
const roomArea = roomLength * roomWidth;
console.log(inputType === 'm' ? `The area of the room is "${roomArea}" square meters.` : `The area of the room is "${(10.7639 * roomArea).toFixed(2)}" square feet.`)
