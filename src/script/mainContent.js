import { Todo } from "./todo.js";

export const mainContent = (function () {
    const contentContainer = document.getElementById("content-container");

    const displayProject = (project) => {
        const todoList = project.getTodoList;

        const projectTitle = document.createElement("h1");
        projectTitle.textContent = project.getTitle;
        const completed = document.createElement("h2");
        completed.textContent = "Completed";
        const newTodoButton = document.createElement("button");
        newTodoButton.classList.add("newTodo");
        newTodoButton.classList.add("buttonShadow");
        newTodoButton.textContent = "+   New Todo";

        contentContainer.appendChild(projectTitle);
        displayUncomplete(todoList);
        contentContainer.appendChild(newTodoButton);
        contentContainer.appendChild(completed);
        displayComplete(todoList);
    }

    const displayUncomplete = (todoList) => {
        const list = document.createElement("ul");
        list.classList.add("uncomplete");
        const contentContainer = document.getElementById("content-container");

        for (const todo of todoList) {
            if (todo.getCompletionStatus === false) {
                const todoContainer = document.createElement("li");
                todoContainer.id = todo.getId;
                todoContainer.textContent = todo.getTitle; 
                list.appendChild(todoContainer);
            }
        }

        contentContainer.appendChild(list);
    }

    const displayComplete = (todoList) => {
        const list = document.createElement("ul");
        list.classList.add("complete");
        const contentContainer = document.getElementById("content-container");

        for (const todo of todoList) {
            if (todo.getCompletionStatus === true) {
                const todoContainer = document.createElement("li");
                todoContainer.id = todo.getId;
                todoContainer.textContent = todo.getTitle; 
                list.appendChild(todoContainer);
            }
        }

        contentContainer.appendChild(list);
    }

    return { displayProject };
})();