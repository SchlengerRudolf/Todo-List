import { Project } from "./project.js";
import { Todo } from "./todo.js";
import { sidebar } from "./sidebar.js";
import { mainContent } from "./mainContent.js";
import { storage, projectList } from "./storage.js";

const newProjectDialog = document.getElementById("new-project-dialog");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");

const newTodoDialog = document.getElementById("new-todo-dialog")
const todoTitle = document.getElementById("todoTitle");
const todoDueDate = document.getElementById("todoDueDate");
const todoPriority = document.getElementById("todoPriority");
const todoDescription = document.getElementById("todoDescription");

const viewProjectDialog = document.getElementById("view-project-dialog");
let viewProjectTitle = document.getElementById("viewProjectTitle");
let viewProjectDescription = document.getElementById("viewProjectDescription");

const viewTodoDialog = document.getElementById("view-todo-dialog");
let viewTodoDueDate = document.getElementById("viewTodoDueDate");
let viewTodoPriority = document.getElementById("viewTodoPriority");
let viewTodoDescription = document.getElementById("viewTodoDescription");

// --- Buttons ---

const newProjectButton = document.querySelector(".newProject");
const addProjectButton = document.querySelector("#projectDialogButtons .addButton");
const closeProjectDialogButton = document.querySelector("#projectDialogButtons .closeButton");

const newTodoButton = document.querySelector(".newTodo");
const addTodoButton = document.querySelector("#todoDialogButtons .addButton");
const closeTodoDialogButton = document.querySelector("#todoDialogButtons .closeButton");

const viewProjectButton = document.getElementById("currentProjectTitle");
const changeProjectButton = document.querySelector("#viewProjectDialogButtons .changeButton");
const closeViewProjectDialogButton = document.querySelector("#viewProjectDialogButtons .closeButton");
const deleteProjectButton = document.getElementById("deleteProjectButton");

const changeTodoButton = document.querySelector("#viewTodoDialogButtons .changeButton");
const closeViewTodoDialogButton = document.querySelector("#viewTodoDialogButtons .closeButton");

// --- Event handlers for project creation dialog ---f

newProjectButton.addEventListener("click", function () { sidebar.openNewProjectDialog() });

addProjectButton.addEventListener("click", function () {
    if (projectTitle.value !== "") {
        const project = new Project(projectTitle.value, projectDescription.value);

        projectList.pushProject(project);
        sidebar.displayProjectList();
        storage.writeUserData();
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
        storage.writeUserData();
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

// --- Event handlers for view project dialog ---

viewProjectButton.addEventListener("click", function () {
    viewProjectTitle.value = mainContent.getCurrentProject().getTitle;
    viewProjectDescription.value = mainContent.getCurrentProject().getDescription;

    mainContent.openViewProjectDialog();
})

changeProjectButton.addEventListener("click", function () {
    mainContent.getCurrentProject().setDescription = viewProjectDescription.value;

    sidebar.displayProjectList();
    mainContent.displayProject(mainContent.getCurrentProject());
    storage.writeUserData();
    viewProjectDialog.close();
})

closeViewProjectDialogButton.addEventListener("click", function () {
    viewProjectDialog.close();
})

deleteProjectButton.addEventListener("click", function () {
    if (projectList.getProjectList().length > 1) {
        projectList.removeProject(mainContent.getCurrentProject().getId);
        sidebar.displayProjectList();
        mainContent.displayProject(projectList.getProjectList()[0]);
        storage.writeUserData();
        viewProjectDialog.close();
    }
    else {
        alert("Can't delete project. You need atleast one project at all times.")
    }
})

// --- Event handlers for view Todo dialog ---

changeTodoButton.addEventListener("click", function () {
    const todo = mainContent.getCurrentProject().getTodo(document.getElementById("viewTodoId").value)

    todo.setDueDate = viewTodoDueDate.value;
    todo.setPriority = viewTodoPriority.value;
    todo.setDescription = viewTodoDescription.value;

    mainContent.displayProject(mainContent.getCurrentProject());
    storage.writeUserData();
    viewTodoDialog.close();
})

closeViewTodoDialogButton.addEventListener("click", function () {
    viewTodoDialog.close();
})