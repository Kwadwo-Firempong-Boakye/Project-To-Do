import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
} from "./create-home";
import renderDetails from "./createDetailsPanel";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	renderDetails();
};


window.addEventListener("load", createInterface);

