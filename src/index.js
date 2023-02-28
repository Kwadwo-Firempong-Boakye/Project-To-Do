import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
} from "./create-home";
import renderDetails from "./create-details-panel.js";
import { renderTaskArea, renderTask } from "./create-task-panel";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	renderTaskArea("All Tasks");
	renderTask();
	renderTask();
	renderTask();
	renderDetails();
};

window.addEventListener("load", createInterface);
