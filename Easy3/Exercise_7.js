/* 
Input: number has length === even number
left side digits are equal to right side 

Algorith:
1. Convert the number into string
2. if string.length is even and slice into half and compare bothe halves.
3. if both condition satisfies do nothing
4. else double the number 
5. return the number by converting from string 

*/

function twice(num) {
  let numStr = String(num);
  let checkLength = numStr.length % 2 === 0
  let checkDouble = numStr.slice(0, (numStr.length / 2)) === numStr.slice(numStr.length / 2) 

  if (!checkLength && !checkDouble) {
    num *= 2;
  }
return num;
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676