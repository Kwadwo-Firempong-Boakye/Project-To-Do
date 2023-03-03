import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
} from "./create-home";
import renderDetails from "./create-details-panel.js";
import { renderTaskHeading, renderTask } from "./create-task-panel";
// import { showForm, taskForm } from "./create-task-form";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	renderTaskHeading();
	renderTask();
	renderTask();
	renderTask();
	renderDetails();
};

window.addEventListener("load", createInterface);
