import { Todo } from "./todo.js";

export const mainContent = (function () {
    let currentProject = {};

    const displayProject = (project) => {
        currentProject = project;
        const todoList = project.getTodoList;
        const projectTitle = document.getElementById("currentProjectTitle");

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

    const openNewTodoDialog = () => {
        const newTodoDialog = document.getElementById("new-todo-dialog");

        newTodoDialog.showModal();
    }

    const getCurrentProject = () => { return currentProject };

    return { displayProject, openNewTodoDialog, getCurrentProject };
})();