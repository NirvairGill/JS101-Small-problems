// Input: two arguments- Array and Object.
// Array has two or more elements combined produce string.
// Object has two key-pair values 
// Output: Function should return full name and object value.

// Algo: Join the array elements and return the string, return the values from object.



const greetings = (arr, obj) => {
  const arrStr = arr.join(' ');
  const objStr = Object.values(obj).join(' ');
  return `Hello, ${arrStr}! Nice to have a ${objStr} around.` 
}











console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.