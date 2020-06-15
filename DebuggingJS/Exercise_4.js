let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
     todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

/* On line 17, we have defined `delete` operator to delete the first element from the given array.
`delete` operator will delete the element from the given location of the array but it will leave the `empty item`
in the array which means the length of the array will never be affected i.e. reduced. Also, `delete todos[0]` is 
always deleting the first element everytime which means we're deleting the same element againnand again which would 
result in unexpected outputs. This code demonstrates the unexpected behaviour of `delete` operator. 

To fix it, we've to change `delete` to `array.prototype.shift()` method. */
