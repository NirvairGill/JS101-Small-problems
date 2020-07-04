const repeater = str => {
  return str.split('').map(char => char + char).join('');
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""