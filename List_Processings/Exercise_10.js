const transactionsFor = (item, tranc) => {
  return tranc.filter(obj => obj['id'] === item);
}

const isItemAvailable = (item, transaction) => {
   let availableItems = transactionsFor(item, transaction).reduce((acc, transc) => {
    if (transc['movement'] === 'in') {
      return acc + transc['quantity'];
    } else {
      return acc - transc['quantity'];
    }
  }, 0)
return availableItems > 0
}










let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true