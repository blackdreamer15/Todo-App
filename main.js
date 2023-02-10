const form = document.querySelector("form");
const inputField = document.querySelector("input#input-field");
const todoList = document.querySelector("ul#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputField.value.trim().length !== 0) {
        addTodo(inputField.value);
    }
    inputField.value = "";
});


function addTodo(inputContent) {

}