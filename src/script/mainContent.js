import crossImage from "../images/cross-solid.svg";

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

    // --- Helper functions ---

    const displayUncomplete = (todoList) => {
        const list = document.getElementById("uncompleteTodos");
        list.textContent = "";

        for (const todo of todoList) {
            if (todo.getCompletionStatus === false) {
                const todoContainer = createTodoContainer(todo);
                const todoDueDate = document.createElement("p");
                todoDueDate.textContent = todo.getDueDate;
                list.appendChild(todoContainer);
                list.appendChild(todoDueDate);
            }
        }
    }

    const displayComplete = (todoList) => {
        const list = document.getElementById("completedTodos");
        list.textContent = "";

        for (const todo of todoList) {
            if (todo.getCompletionStatus === true) {
                const todoContainer = createTodoContainer(todo);
                const todoDueDate = document.createElement("p");
                todoDueDate.textContent = todo.getDueDate;
                list.appendChild(todoContainer);
                list.appendChild(todoDueDate);
            }
        }
    }

    const createTodoContainer = (todo) => {
        const container = document.createElement("span");
        const toggleButton = document.createElement("button");
        const removeButton = document.createElement("img");
        const todoListItem = document.createElement("li");

        removeButton.src = crossImage;
        toggleButton.classList.add("toggleButton");
        removeButton.classList.add("removeButton");

        addToggleEvent(toggleButton, todo);
        addRemoveEvent(removeButton, todo);

        todoListItem.id = todo.getId;
        todoListItem.textContent = todo.getTitle;
        container.appendChild(toggleButton);
        container.appendChild(todoListItem);
        container.appendChild(removeButton);
        
        return container;
    }

    // --- EventListener functions ---

    const addToggleEvent = (button, todo) => {
        // Different button textContent on hover, depending on completionStatus
        if (!todo.getCompletionStatus) {
            button.textContent = " ";

            button.addEventListener("click", function () {
                todo.toggleCompletionStatus();
                displayProject(currentProject);
            });
            button.addEventListener("mouseover", function () { button.textContent = "✓"});
            button.addEventListener("mouseout", function () { button.textContent = " "});
        }

        else {
            button.textContent = "✓"
                    
            button.addEventListener("click", function () {
                todo.toggleCompletionStatus();
                displayProject(currentProject);
            });
            button.addEventListener("mouseover", function () { button.textContent = "X"});
            button.addEventListener("mouseout", function () { button.textContent = "✓"});
        };
    }

    const addRemoveEvent = (button, todo) => {
        button.addEventListener("click", function () {
            currentProject.removeTodo(todo.getId);
            displayProject(currentProject);
        });
    }

    // --- Open dialog function ---

    const openNewTodoDialog = () => {
        const newTodoDialog = document.getElementById("new-todo-dialog");

        newTodoDialog.showModal();
    }

    const getCurrentProject = () => { return currentProject };

    return { displayProject, openNewTodoDialog, getCurrentProject };
})();