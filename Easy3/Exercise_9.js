/* 
Input: string and alphanumeric characters
output: string with spaces instead of alphanumeric 

Alogorithm:

create an empty string
Iterate over the string char by char
return new str
*/
function cleanUp(str) {
  let spacedStr = createSpaces(str);
  let cleanStr = '';

  for (let index = 0; index < spacedStr.length; index += 1) {
    if (spacedStr[index] !== spacedStr[index + 1]) {
      cleanStr += spacedStr[index];
    }
  }

  return cleanStr;
}

function createSpaces(str) {
  let spacedStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str[index].codePointAt() < 96) {
      spacedStr += ' ';
    } else {
      spacedStr += str[index];
    }
  }

  return spacedStr;
}

console.log(cleanUp("---what's my +*& line?")); 