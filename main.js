const form = document.querySelector("form");
const newTodoInput = document.querySelector("input#new-todo-input");
const todoList = document.querySelector("div#todo-list");
const selectElement = document.querySelector("select#select-opt");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(todoList.childElementCount === 0) {
        const img = document.createElement("img");
        img.setAttribute("src", "");
    }
    addTodo(newTodoInput.value);
});


function addTodo(todoValue) {
    const todoItemContainer = document.createElement("div");
    const todoContentContainer = document.createElement("div");
    const inputCheckbox = document.createElement("input");
    const todoInputField = document.createElement("input");
    const todoActionsContainer = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    todoItemContainer.classList.add("todo-item");
    todoContentContainer.classList.add("todo-content");
    todoActionsContainer.classList.add("actions");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    todoInputField.classList.add("todo-input");

    inputCheckbox.setAttribute("type", "checkbox");
    todoInputField.setAttribute("type", "text");
    todoInputField.setAttribute("readonly", "readonly");

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    todoContentContainer.append(inputCheckbox, todoInputField);
    todoActionsContainer.append(editBtn, deleteBtn);
    todoItemContainer.append(todoContentContainer, todoActionsContainer);

    if (todoValue.trim().length !== 0) {
        todoList.append(todoItemContainer);
        todoInputField.value = todoValue;
        newTodoInput.value = "";
    }
    else {
        alert("Enter a todo item");
    }



    editBtn.addEventListener("click", function editTodo() {
        if (editBtn.innerText.toLowerCase() === "edit") {
            editBtn.innerText = "Save";
            todoInputField.removeAttribute("readonly");
            todoInputField.focus();
        }
        else {
            editBtn.innerText = "Edit";
            todoInputField.setAttribute("readonly", "readonly");
        }
    });

    deleteBtn.addEventListener("click", function deleteTodo(e) {
        e.target.parentElement.parentElement.remove();
    });

    inputCheckbox.addEventListener("click", function isCheckedOrNot() {
        if (inputCheckbox.checked === true) {
            todoItemContainer.classList.add("completed");
            todoItemContainer.classList.remove("uncompleted");
        }
        else {
            todoItemContainer.classList.add("uncompleted");
            todoItemContainer.classList.remove("completed");
        }
    });


    selectElement.addEventListener("change", filterTodo);
}

function filterTodo(e) {
    todoList.childNodes.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (todo.classList.contains("uncompleted")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}