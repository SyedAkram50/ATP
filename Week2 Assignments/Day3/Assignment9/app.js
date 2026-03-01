// TODO: Import task functions
// import { ... } from './task.js';
import {addTask,getAllTasks,completeTask} from './task.js'

// Test your module system
// 1. Add some tasks
console.log(addTask('Coading','high','27-2'))
console.log(addTask('Writting','low','28-2'))
console.log(addTask('Playing','medium','1-3'))

// 2. Display all tasks
console.log(getAllTasks())

// 3. Complete a task
completeTask('Coading')

// 4. Display all tasks again
console.log(getAllTasks())
