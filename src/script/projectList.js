export const projectList = (function () {
    const projectList = [];

    const getProjectList = () => projectList;
    const pushProject = (project) => projectList.push(project);
    const removeProject = (id) => {
        let list = projectList;

        for (let i = 0; i < list.length; i++) {
            if (id === list[i].getId) {
                projectList.splice(i, 1);
                break;
            }
        }
    }

    return { getProjectList, pushProject, removeProject };
})();