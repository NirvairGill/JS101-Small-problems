/* Initialize stack and registers
- split the string into rray of words.
- Iterate through the array.
- For each numeric save into the register
- Define all operations in terms of methods and functions
- Call methods according to their occurance */


const minilang = str => {
  let stack = [];
  let register = 0;
  let arr = ['POP', 'ADD', 'SUB', 'DIV', 'MULT', 'MOD'] 
  str.split(' ').forEach(word => {
    if(stack.length === 0 && arr.includes(word)  ) {
      console.log('Error! Stack is empty!')
    }
    if(Number(word)) {
      register = Number(word);
    } 
    if(word === 'PRINT') {
      console.log(register);
    }
    if(word === 'PUSH') {
      stack.push(register);
    } 
    if(word === 'MULT') {
      register *= stack.pop();
    }
    if(word === 'ADD') {
      register += stack.pop();
    } 
    if(word === 'POP') {
      register = stack.pop();
    }
    if(word === 'DIV') {
      register =  Math.floor(register/stack.pop());
    }
    if(word === 'MOD') {
      register = Math.floor(register % stack.pop());
    } 
    if(word === 'SUB') {
      register -= stack.pop();
    } 
    

  } )

  return register;
}






minilang('PRINT');
// 0
minilang('5 PUSH 3 MULT PRINT');
// 15
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
minilang('5 PUSH POP PRINT');
// 5
 minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12
minilang('-3 PUSH 5 SUB PRINT');
// 8
minilang('6 PUSH');
//(nothing is printed because the `program` argument has no `PRINT` commands)