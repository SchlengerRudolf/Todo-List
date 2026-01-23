import { projectList } from "./projectList.js"

export const sidebar = (function () {
    const projectsContainer = document.getElementById("project-container");

    const display = () => {
        const projects = projectList.getProjectList();

        for (const project of projects) {
           const projectContainer = document.createElement("span");
           projectContainer.id = project.getId;
           projectContainer.textContent = project.getTitle;
           projectsContainer.appendChild(projectContainer);
        }
    };

    return { display };
})();