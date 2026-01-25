import "./styles.css";
import "./script/dialogs.js";
import { Project } from "./script/project.js";
import { projectList } from "./script/projectList.js";
import { sidebar } from "./script/sidebar.js";

const defaultProject = new Project("Default", "");
projectList.pushProject(defaultProject);
sidebar.displayProjectList();