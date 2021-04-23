const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todoList = document.querySelector(".todoList");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => {
        addTodo(todo);
})}

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
        // console.log(Boolean(todo));
    }

    if(todoText){
        const list = document.createElement("li");
        list.innerText = todoText;
        todoList.appendChild(list);
        
        if(todo && todo.completed){
            list.classList.add("completed");
            // updateLS();
        }
        list.addEventListener("click", () => {
            list.classList.toggle("completed");
            updateLS();
        });
        
        list.addEventListener("contextmenu", ()=>{
            list.remove();
            updateLS();
        });
        
        updateLS();
    }
    input.value ="";
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function updateLS(){
    const todoList = [];
    const todos = document.querySelectorAll("li");

    todos.forEach(todo => {
        todoList.push({
            text : todo.innerText,
            completed:todo.classList.contains("completed")
        });
    });

    localStorage.setItem("todos", JSON.stringify(todoList));
}