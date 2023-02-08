const form = document.querySelector("form");
const inputField = document.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(inputField.value);
});

function addTodo(inputContent) {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = inputContent;
    todoList.append(newTodoItem);
    console.log(newTodoItem.outerHTML);

}