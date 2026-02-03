import "./styles.css";
import "./script/dialogs.js";
import { sidebar } from "./script/sidebar.js";
import { mainContent } from "./script/mainContent.js";
import { storage, projectList } from "./script/storage.js";

storage.readUserData();
sidebar.displayProjectList();
mainContent.displayProject(projectList.getProjectList()[0]);