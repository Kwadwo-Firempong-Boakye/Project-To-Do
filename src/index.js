import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
} from "./create-home";
import renderDetails from "./create-details-panel.js";
import { renderTaskHeading, renderTask } from "./create-task-panel";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	renderTaskHeading();
};

window.addEventListener("load", createInterface);
