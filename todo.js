const todoForm = document.querySelector('.js-todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todoList');

const TODOS_LS = 'todos';

const todos=[];

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}
function paintTodo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = todos.length+1;

    delBtn.innerText = '❌';
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    
    todoList.appendChild(li);
    
    const todoObj = {
        text:text,
        id:newId
    };
    todos.push(todoObj);
    saveTodos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value='';
}
function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
        paintTodo();
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener('submit', handleSubmit);
}

init();