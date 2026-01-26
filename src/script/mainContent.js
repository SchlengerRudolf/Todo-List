import { Todo } from "./todo.js";

export const mainContent = (function () {
    const contentContainer = document.getElementById("content-container");

    const displayProject = (project) => {
        const todoList = project.getTodoList;
        const projectTitle = document.getElementById("currentProjectTitle");
        const newTodoButton = document.querySelector("#content-container .newTodo");

        projectTitle.textContent = project.getTitle;
        displayUncomplete(todoList);
        displayComplete(todoList);
    }

    const displayUncomplete = (todoList) => {
        const list = document.getElementById("uncompleteTodos");
        list.textContent = "";

        for (const todo of todoList) {
            if (todo.getCompletionStatus === false) {
                const todoContainer = document.createElement("li");
                todoContainer.id = todo.getId;
                todoContainer.textContent = todo.getTitle; 
                list.appendChild(todoContainer);
            }
        }
    }

    const displayComplete = (todoList) => {
        const list = document.getElementById("completedTodos");
        list.textContent = "";

        for (const todo of todoList) {
            if (todo.getCompletionStatus === true) {
                const todoContainer = document.createElement("li");
                todoContainer.id = todo.getId;
                todoContainer.textContent = todo.getTitle; 
                list.appendChild(todoContainer);
            }
        }
    }

    return { displayProject };
})();