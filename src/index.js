import "./style.css";
import {
	createHeader,
	createDashboardStructure,
	createHamburger,
	createSideMenu,
	createProjectMenu,
} from "./create-home";
import { renderTaskHeading } from "./create-task-panel";
import pubSub from "./pub-sub";

const createInterface = () => {
	createHeader();
	createHamburger();
	createDashboardStructure();
	createSideMenu();
	createProjectMenu();
	renderTaskHeading();
	pubSub.publish("task-added", {
		name: "Just-Do-It App - Guide",
		desc: "Insert instruction on how to use the app",
		date: "15/03/2023",
		priority: "high",
		project: "General",
		taskId: 5000,
	});
};

window.addEventListener("load", createInterface);
