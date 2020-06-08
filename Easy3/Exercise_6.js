const readline = require('readline-sync');
function prompt(msg) {
  console.log('=> ' + msg)
}

function madlibs() {
  
  let noun = readline.question(prompt('Enter a noun: '));

  let verb = readline.question(prompt('Enter a verb: '));

  let adjective = readline.question(prompt('Enter a adjective: '));

  let adverb = readline.question(prompt('Enter a adverb: '));


  prompt(`The quick ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`)
}

madlibs();