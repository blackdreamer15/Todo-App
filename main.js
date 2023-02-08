const form = document.querySelector("form");
const inputField = document.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputField.value.length !== 0) {
        addTodo(inputField.value);
    }
    
});

todoList.addEventListener("click", function removeTodo(e) {
    //Delete todo item clicked on
    e.target.nodeName === 'LI' && e.target.remove();
    //Update id name of todo items
    let count = 0;
    for (const todo of todoList.children) {
        todo.id = `todo-${count}`;
        count++;
    }
    console.log(document.querySelectorAll('li').outerHTML);
});

