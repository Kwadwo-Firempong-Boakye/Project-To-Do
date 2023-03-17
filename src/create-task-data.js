import pubSub from "./pub-sub";
import { localStorageCommitTasks, localStorageCommitProjects } from "./storage";

//Data storage array;
const tasks = [
	// {
	// 	name: "Just-Do-It App - Guide",
	// 	desc: "Insert instruction on how to use the app",
	// 	date: "15/03/2023",
	// 	priority: "high",
	// 	project: "General",
	// 	taskId: 5000,
	// },
];

//Factory function to create task item data
const createTaskData = () => {
	const name = document.querySelector("#task-title").value;
	const desc = document.querySelector("#task-desc").value;
	const date = document.querySelector("#task-due").value;
	const priority = document.querySelector(
		'input[name="task-priority"]:checked'
	).value;
	const project = document.querySelector("select").value;
	const taskId = taskIdentityNumber.getIdNumber();

	const taskObject = { name, desc, date, priority, project, taskId };
	pubSub.publish("task-added", taskObject);
};

//Function to store data
const storeTaskData = (obj) => {
	tasks.push(obj);
	// console.log(tasks);
};

//Function to remove data
const removeTaskData = (key) => {
	let deletedIndex;
	let taskProject;
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == key) {
			deletedIndex = i;
			taskProject = tasks[i]["project"];
			tasks.splice(i, 1);
		}
	}
	pubSub.publish("task-deleted", deletedIndex, taskProject);
	// console.log(tasks);
};

//Function to modify data
const modifyTaskData = (index) => {
	tasks[index]["name"] = document.querySelector("#task-title").value;
	tasks[index]["desc"] = document.querySelector("#task-desc").value;
	tasks[index]["date"] = document.querySelector("#task-due").value;
	tasks[index]["priority"] = document.querySelector(
		'input[name="task-priority"]:checked'
	).value;
	tasks[index]["project"] = document.querySelector("select").value;

	const nameProp = tasks[index]["name"];
	const idProp = tasks[index]["taskId"];

	pubSub.publish("task-modified", idProp, nameProp);
};

// Function to create task ID
const idGenerator = () => {
	let idNumber = 100;
	const getIdNumber = () => idNumber;
	const increaseIdNumber = () => (idNumber += 5);
	return {
		getIdNumber,
		increaseIdNumber,
	};
};

//Instance of identity
const taskIdentityNumber = idGenerator();

//Data storage for caching positions of project objects
const projectIndexes = {};

//Function to cache index of each created task by projects
const cacheIndexes = ({ project }) => {
	let position = tasks.length - 1;
	if (projectIndexes[project]) {
		projectIndexes[project].push(position);
	} else {
		projectIndexes[project] = [position];
	}
	// console.log(projectIndexes);
};

//Function to correct indexes of created tasks by projects after task deletion
const removeDeletedCacheIndex = (deletedTaskIndex, taskProject) => {
	projectIndexes[taskProject].forEach((element, i, a) => {
		if (element == deletedTaskIndex) {
			a.splice(i, 1);
			adjustCachedIndexes(deletedTaskIndex);
			return;
		}
	});
};

const adjustCachedIndexes = (num) => {
	let projects = Object.keys(projectIndexes);
	projects.forEach((project) => {
		projectIndexes[project] = projectIndexes[project].map((item) => {
			return item > num ? item - 1 : item;
		});
	});
	// console.log(projectIndexes);
};

//Data storage for lists of projects
const projectsUi = ["General"];

const storeProjectsUi = (name) => {
	projectsUi.push(name);
};

const categorizeAndFilter = () => {
	const dueToday = [];
	const dueThisWeek = [];
	const pastDue = [];
	const completed = [];

	const accessDateStorageController = (key) => {
		let focus;
		switch (key) {
			case "due-today":
				focus = dueToday;
				break;
			case "due-this-week":
				focus = dueThisWeek;
				break;
			case "pastDue":
				focus = pastDue;
				break;
			case "completed":
				focus = completed;
				break;
			default:
				console.log("input error");
				break;
		}
		return focus;
	};

	const checkDateStatus = () => {
		let today = new Date().toISOString().split("T")[0];
		let currentWeekDays = Array.from(Array(7).keys()).map((idx) => {
			const d = new Date();
			d.setDate(d.getDate() - d.getDay() + idx);
			return d.toISOString().split("T")[0];
		});

		tasks.forEach((task) => {
			let textContainer = document.querySelector(
				`[data-key="${task["taskId"]}"]`
			);
			let taskDate = task["date"];
			if (taskDate == today) {
				dueToday.push(task);
				dueThisWeek.push(task);
				textContainer.parentElement.setAttribute("data-category", "due-today");
				textContainer.parentElement.setAttribute("this-week", "true");
			} else if (taskDate < today) {
				pastDue.push(task);
				textContainer.parentElement.setAttribute("data-category", "past-due");
				if (currentWeekDays.includes(taskDate)) {
					textContainer.parentElement.setAttribute("this-week", "true");
					dueThisWeek.push(task);
				} else {
					textContainer.parentElement.setAttribute("this-week", "false");
				}
			}
		});
	};

	const assignDateStatus = (obj) => {
		let today = new Date().toISOString().split("T")[0];
		let currentWeekDays = Array.from(Array(7).keys()).map((idx) => {
			const d = new Date();
			d.setDate(d.getDate() - d.getDay() + idx);
			return d.toISOString().split("T")[0];
		});
		let taskDate = obj["date"];
		let taskId = obj["taskId"];
		let textContainer = document.querySelector(`[data-key="${taskId}"]`);

		if (taskDate == today) {
			dueToday.push(obj);
			dueThisWeek.push(obj);
			textContainer.parentElement.setAttribute("data-category", "due-today");
			textContainer.parentElement.setAttribute("this-week", "true");
		} else if (currentWeekDays.includes(taskDate)) {
			dueThisWeek.push(obj);
			textContainer.parentElement.setAttribute("this-week", "true");
		} else {
			textContainer.parentElement.setAttribute("this-week", "false");
		}
	};

	return {
		checkDateStatus,
		assignDateStatus,
		accessDateStorageController,
	};
};

const dateCategorizer = categorizeAndFilter();

pubSub.subscribe("task-added", storeTaskData);
pubSub.subscribe("task-added", cacheIndexes);
pubSub.subscribe("task-added", taskIdentityNumber.increaseIdNumber);
pubSub.subscribe("task-added", localStorageCommitTasks);
pubSub.subscribe("task-deleted", removeDeletedCacheIndex);
pubSub.subscribe("task-deleted", localStorageCommitTasks);
pubSub.subscribe("task-modified", localStorageCommitTasks);
pubSub.subscribe("project-ui-added", storeProjectsUi);
pubSub.subscribe("project-ui-added", localStorageCommitProjects);

export {
	tasks,
	createTaskData,
	removeTaskData,
	modifyTaskData,
	projectsUi,
	dateCategorizer,
};
