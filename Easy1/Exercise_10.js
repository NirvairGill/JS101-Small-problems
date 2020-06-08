/*
input: supplied number,  factors = [3,5]
Algorithm:
Create an empty Array lets say arr.
Iterate over given factors array and for each multiples upto supllied number.check if it already in arr, if no push multiple into arr
Add all elements using reduce method.
*/

const multisum = num => {
  const factors = [3,5]
  const multiples = [];
  factors.forEach(factor => {
    for (i = factor; i <=  num; i += factor) {
          multiples.push(i);
    
    }
  })
  // Use 'new Set' method filter out the unique numbers
return [...new Set(multiples)].reduce(((acc, value) => acc + value), 0)

};






console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168