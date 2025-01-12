const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById('todoButton')
const removeAllButton = document.getElementById('remove-all-completed')
const todoList = document.getElementById("todo-list");


function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, 
  // all todos should display inside the "todo-list" element.
  for ( let item of todos){
  const div = document.createElement('div')
  div.classList.add('todo')

  const li = document.createElement('li')
  li.innerText = item.task;
  li.classList.add('todo-item')
  div.appendChild(li)

  const completeButton = document.createElement('button')
  completeButton.innerHTML = '<i class = "fa fa-check"></i>'
  completeButton.classList.add('complete-button')
  div.appendChild(completeButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class = "fa fa-trash"></i>'
  deleteButton.classList.add('delete-button')
  div.appendChild(deleteButton)
  
  todoList.appendChild(div)

  todoInput.value = "";
  }
  
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos); 

// This function will take the value of the input field and add it 
// as a new todo to the bottom of the todo list. These new todos will need the 
// completed and delete buttons adding like normal.



todoButton.addEventListener("click", addNewTodo)
todoList.addEventListener('click', deleteCheck)
removeAllButton.addEventListener('click', deleteAllCompletedTodos)

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const div = document.createElement('div')
  div.classList.add('todo')

  const li = document.createElement('li')
  li.innerText = todoInput.value;
  li.classList.add('todo-item')
  div.appendChild(li)

  const completeButton = document.createElement('button')
  completeButton.innerHTML = '<i class = "fa fa-check"></i>'
  completeButton.classList.add('complete-button')
  div.appendChild(completeButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class = "fa fa-trash"></i>'
  deleteButton.classList.add('delete-button')
  div.appendChild(deleteButton)
  
  todoList.appendChild(div)

  todoInput.value = "";
}

function deleteCheck(e) {
  // Write your code here...
  e.preventDefault();
  const item = e.target;
  if (item.classList[0] === 'delete-button'){
    const todo = item.parentElement;
    todo.remove()
  }
  if (item.classList[0] === 'complete-button'){
    const todo = item.parentElement;
    todo.style.textDecoration = "line-through"
    todo.classList.add('completed')
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones 
// (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  // Write your code here...
  e.preventDefault();
  let completed = document.getElementsByClassName('completed')
  let completedArray = Array.from(completed)
  for (let item of completedArray) {
    item.remove();
}
  }

