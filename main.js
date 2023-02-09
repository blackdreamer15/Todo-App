const form = document.querySelector("form");
const inputField = document.querySelector("input#input-field");
const todoList = document.querySelector("ul#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputField.value.length !== 0) {
        addTodo(inputField.value);
    }
    inputField.value = "";
});

todoList.addEventListener("click", function removeTodo(e) {
    //Delete todo item clicked on
    e.target.nodeName === 'LI' && e.target.remove();
    //Update id name of todo items
    let count = 0;
    for (const todo of todoList.children) {
        todo.id = `todo-item-${count}`;
        count++;
    }
    console.log(document.querySelectorAll('li').outerHTML);
});

function addTodo(inputContent) {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = inputContent;
    todoList.append(newTodoItem);
    let idCount = todoList.children.length-1;
    newTodoItem.id =`todo-item-${idCount}`;
    console.log(newTodoItem.outerHTML);
}

