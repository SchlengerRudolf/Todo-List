import { Todo } from "./todo";
import { Project } from "./project";
import { projectList } from "./projectList";

const storage = (function () {
    const storedUserData = localStorage.getItem("userData");

    const readUserData = () => {
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            for (let project of userData) {
                Object.setPrototypeOf(project, Project.prototype);
                for (let todo of project.getTodoList) {
                    Object.setPrototypeOf(todo, Todo.prototype);
                }
            }
            projectList.setProjectList(userData);
        }
        else {
            const defaultProject = new Project("Default", "");
            projectList.pushProject(defaultProject);
        }
    }
    
    const writeUserData = () => {
        const userData = JSON.stringify(projectList.getProjectList());
        
        localStorage.setItem("userData", userData);
    }

    return { readUserData, writeUserData };
})();

export { storage, projectList };