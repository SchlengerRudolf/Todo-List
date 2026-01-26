import { Project } from "./project.js";
import { projectList } from "./projectList.js";
import { Todo } from "./todo.js";
import { sidebar } from "./sidebar.js";
import { mainContent } from "./mainContent.js";

const newProjectDialog = document.getElementById("new-project-dialog");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");

const newTodoDialog = document.getElementById("new-todo-dialog")
const todoTitle = document.getElementById("todoTitle");
const todoDueDate = document.getElementById("todoDueDate");
const todoPriority = document.getElementById("todoPriority");
const todoDescription = document.getElementById("todoDescription");

// --- Buttons ---

const newProjectButton = document.querySelector(".newProject");
const addProjectButton = document.querySelector("#projectDialogButtons .addButton");
const closeProjectDialogButton = document.querySelector("#projectDialogButtons .closeButton");
const newTodoButton = document.querySelector(".newTodo");
const addTodoButton = document.querySelector("#todoDialogButtons .addButton");
const closeTodoDialogButton = document.querySelector("#todoDialogButtons .closeButton");

// --- Event handlers for project creation dialog ---

newProjectButton.addEventListener("click", function () { sidebar.openNewProjectDialog() });

addProjectButton.addEventListener("click", function () {
    if (projectTitle.value !== "") {
        const project = new Project(projectTitle.value, projectDescription.value);

        projectList.pushProject(project);
        sidebar.displayProjectList();
        newProjectDialog.close("");
    }
})

closeProjectDialogButton.addEventListener("click", function () {
    newProjectDialog.close("");
})

newProjectDialog.addEventListener("close", function () { 
    projectTitle.value = "";
    projectDescription.value = "";
})

// --- Event handlers for todo creation dialog ---

newTodoButton.addEventListener("click", function () { mainContent.openNewTodoDialog() });

addTodoButton.addEventListener("click", function () {
    if (todoTitle.value !== "") {
        const todo = new Todo(todoTitle.value, todoDueDate.value, todoPriority.value, todoDescription.value);
        const project = mainContent.getCurrentProject();

        project.pushTodo(todo);
        mainContent.displayProject(project);
        newTodoDialog.close("");
    }
})

closeTodoDialogButton.addEventListener("click", function () {
    newTodoDialog.close("");
})

newTodoDialog.addEventListener("close", function () { 
    todoTitle.value = "";
    todoDueDate.value = "";
    todoPriority.value = 0;
    todoDescription.value = "";
})