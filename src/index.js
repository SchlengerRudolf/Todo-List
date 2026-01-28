import "./styles.css";
import "./script/dialogs.js";
import { Project } from "./script/project.js";
import { projectList } from "./script/projectList.js";
import { sidebar } from "./script/sidebar.js";
import { mainContent } from "./script/mainContent.js";

const defaultProject = new Project("Default", "");
projectList.pushProject(defaultProject);
sidebar.displayProjectList();
mainContent.displayProject(defaultProject);