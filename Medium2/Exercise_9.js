const longest = str => {
  let longestParagraph = str.split(/\n/).sort((a,b) => b.length - a.length)[0];
  let longestWord = str.split(' ').sort((a,b) => b.length - a.length)[0]
  let longestSentence = str.match(/\w.*?[.?!]/g).filter(sentence => sentence.includes(longestWord))
  
  console.log(`${longestSentence} \n`);
  
  console.log(longestParagraph);
}


let string = 'Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal. \n'+

'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.\n' +

'We are met on a great battlefield of that war.We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live.It is altogether fitting and proper that we should do this.'

console.log(longest(string));