import { Project } from "./project.js";
import { projectList } from "./projectList.js";
import { sidebar } from "./sidebar.js";

const newProjectdialog = document.getElementById("new-project-dialog");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");

// --- Buttons ---

const newProjectButton = document.querySelector(".newProject");
const addProjectButton = document.querySelector("#projectDialogButtons .addButton");
const closeProjectDialogButton = document.querySelector("#projectDialogButtons .closeButton");

// --- Event handlers for dialog buttons ---

newProjectButton.addEventListener("click", function () { sidebar.openNewProjectDialog() });

addProjectButton.addEventListener("click", function () {
    if (projectTitle.value !== "") {
        const projectsContainer = document.getElementById("project-container");
        const project = new Project(projectTitle.value, projectDescription.value);

        projectList.pushProject(project);
        projectsContainer.textContent = "";
        projectTitle.value = "";
        projectDescription.value = "";
        sidebar.displayProjectList();
        newProjectdialog.close();
    }
})

closeProjectDialogButton.addEventListener("click", function () {
    projectTitle.value = "";
    projectDescription.value = "";

    newProjectdialog.close();
})