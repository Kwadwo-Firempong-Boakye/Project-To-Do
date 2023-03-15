import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
	createProjectMenu,
} from "./create-home";
import { renderTaskHeading } from "./create-task-panel";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	createProjectMenu();
	renderTaskHeading();
};

window.addEventListener("load", createInterface);
