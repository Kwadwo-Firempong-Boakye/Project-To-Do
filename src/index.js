import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
	createProjectMenu,
} from "./create-home";
import { renderTaskHeading } from "./create-task-panel";
import { pageLoader } from "./storage";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	createProjectMenu();
	renderTaskHeading();
	pageLoader();
};

window.addEventListener("load", createInterface);
