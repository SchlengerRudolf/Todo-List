import { projectList } from "./projectList.js"
import { mainContent } from "./mainContent.js";

export const sidebar = (function () {
    const projectsContainer = document.getElementById("project-container");

    // Displays all projects at the dedicated area in the sidebar 
    const displayProjectList = () => {
        projectsContainer.textContent = "";
        const projects = projectList.getProjectList();

        for (const project of projects) {
           const projectContainer = document.createElement("li");
           projectContainer.id = project.getId;
           projectContainer.textContent = project.getTitle;
           projectContainer.addEventListener("click", function () {
                mainContent.displayProject(project);
           })
           projectsContainer.appendChild(projectContainer);
        }
    };

    // Sidebar button for opening the new project dialog
    const openNewProjectDialog = () => {
        const newProjectDialog = document.getElementById("new-project-dialog");

        newProjectDialog.showModal();
    }

    return { displayProjectList, openNewProjectDialog };
})();