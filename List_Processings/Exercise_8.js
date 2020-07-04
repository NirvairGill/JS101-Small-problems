const buyFruit = arr => {
  let newArr = []
   arr.forEach(subArr => {
     for(let ind = 0; ind < subArr[1]; ind += 1) {
       newArr.push(subArr[0]);
     }
   });
   return newArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));