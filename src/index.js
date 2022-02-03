


// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
// const tarea = new Todo('Aprender JavaScripts');

// crear en classes :  index.js para agrupar las clases y exportarlas

import './styles.css';
import { Todo, TodoList } from './classes'

export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScripts');

todoList.nuevoTodo( tarea );

console.log( tarea );