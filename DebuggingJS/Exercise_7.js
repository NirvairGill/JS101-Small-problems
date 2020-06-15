// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

let d20 = {min: 1, max: 20};

function roll(die) {
  return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue) {

  let result = roll(d20);

  console.log("--> " + result);

  switch (result) {
    case 1:
      return automaticFail();
    case 20:
      return automaticSuccess();
    default:
      return void (result >= characterValue ? success() : fail());
  }
}

function success() {
  console.log("Your character succeeds.");
}

function fail () {
  console.log("Your character fails.");
}

function automaticSuccess() {
  console.log("Your character succeeds without effort. Glory!");
}

function automaticFail() {
  console.log("Meagre attempt. Your character fails miserably.");
}

// Example character.
let myCharacter = {
  name: 'Jenkins',
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);

/* There is no break statement defined in `switch` statement defined from line 22 to line 30.
What happens when we're passing `1` as an argumnet to `roll` function that `result` variable gets set to value `1`
and the first case evaluates truthy so it runs `automaticFail()` function. As there is no explicit
`break` or `return` statement defined, the `switch` keeps running til the end.

All we need to insert a return or break statement. */