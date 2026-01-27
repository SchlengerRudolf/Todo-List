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
                const todoContainer = createTodoContainer(todo);
                list.appendChild(todoContainer);
            }
        }
    }

    const displayComplete = (todoList) => {
        const list = document.getElementById("completedTodos");
        list.textContent = "";

        for (const todo of todoList) {
            if (todo.getCompletionStatus === true) {
                const todoContainer = createTodoContainer(todo);
                list.appendChild(todoContainer);
            }
        }
    }

    const createTodoContainer = (todo) => {
        const container = document.createElement("span");
        const toggleButton = document.createElement("button");
        toggleButton.classList.add("toggleButton");
        const todoListItem = document.createElement("li");

        if (!todo.getCompletionStatus) {
            toggleButton.textContent = " ";

            toggleButton.addEventListener("click", function () {
                todo.toggleCompletionStatus();
                displayProject(currentProject);
            });
            toggleButton.addEventListener("mouseover", function () { toggleButton.textContent = "✓"});
            toggleButton.addEventListener("mouseout", function () { toggleButton.textContent = " "});
        }

        else {
            toggleButton.textContent = "✓"

            toggleButton.addEventListener("click", function () {
                todo.toggleCompletionStatus();
                displayProject(currentProject);
            });
            toggleButton.addEventListener("mouseover", function () { toggleButton.textContent = "X"});
            toggleButton.addEventListener("mouseout", function () { toggleButton.textContent = "✓"});
        }

        todoListItem.id = todo.getId;
        todoListItem.textContent = todo.getTitle;
        container.appendChild(toggleButton);
        container.appendChild(todoListItem);
        
        return container;
    }

    const openNewTodoDialog = () => {
        const newTodoDialog = document.getElementById("new-todo-dialog");

        newTodoDialog.showModal();
    }

    const getCurrentProject = () => { return currentProject };

    return { displayProject, openNewTodoDialog, getCurrentProject };
})();