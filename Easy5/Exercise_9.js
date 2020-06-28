/* Input: array
Output: Object

algo:
- Initiliaze and empty object
- Iterate throgh array and see if the index of element is equal to its current index
- If not, add the element to the object with incrementing count 1
- if yes add the element 
- console.log each key value pair.
*/

const countOccurrences = arr => {
  let object = {};
  arr = arr.map(ele => ele.toLowerCase());

  arr.forEach((ele, ind) => {
    arr.indexOf(ele) !== ind ? object[ele] += 1 : object[ele] = 1;
  })
  for (let key in object) {
    console.log(`${key} => ${object[key]}`)
  }
}

let vehicles = ['car', 'Car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2