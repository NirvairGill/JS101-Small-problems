function range(start, end = -1) {
  if(end === -1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));

/* There are two errors in this code. First we've declared two functions with the same name in a single code.
What happens is when you declare a function two times in a code, the second or later function overrides the first one
and in our case function `range` declared on line 11 overrides the function `range` declared on line 1.
Second, On line 11, we're calling and returning the same function `range` within the same function `range` with
different numbers of arguments i.e. calling the function within itself always get stuck in an endless loop.
This code demonstartes how naming of the functions and calling function within itself results in unexpeted behaviours.

To fix it we have to change function names.*/