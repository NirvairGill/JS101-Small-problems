const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let word = false
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      word = true;
    }
    
  });

  return word;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/* This programme will return `false` all the time because on line 9, we're using `forEach()` method to iterate through the
array and on line 10, if our condition satisfies, we're explicity returning boolean `true` and on line 15, `false` 
after we break out of the loop. Since `forEach()` method always returns `undefined` and function `isReserved` explicitly returns
`false`, So we will get `false` all the time. 
How can we fix it is either implementing `for` *loop* instead of `forEach` method or creating a local variable and assigning its
value to `false` and reassigning its value `true` as the condition is met. Further, returning explicitly the variable as the
return value of function. 
This code demonstartes the behaviour of `forEach` method and how it's return value can effect the outcome. */