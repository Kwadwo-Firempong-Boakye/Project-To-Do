import pubSub from "./pub-sub";
import { tasks, removeTaskData, dateCategorizer } from "./create-task-data";
import { renderDetails, showDetails } from "./create-details-panel";
import { modifyForm } from "./create-task-form";

function renderTaskHeading(data = "All tasks") {
	const headingTwo = document.querySelector("h2");
	if (headingTwo) {
		headingTwo.innerText = data;
		return;
	}

	const tasksArea = document.querySelector(".tasks-area");
	const heading = document.createElement("h2");
	tasksArea.append(heading);
	heading.innerText = data;
}

function renderTask(obj) {
	const tasksArea = document.querySelector(".tasks-area");
	const taskContainer = document.createElement("div");
	const checkContainer = document.createElement("div");
	const textContainer = document.createElement("div");
	const taskCheckLabel = document.createElement("label");
	const taskCheckInput = document.createElement("input");
	const taskCheckSpan = document.createElement("span");
	const taskName = document.createElement("p");
	const taskButtonsArea = document.createElement("div");
	const taskEdit = document.createElement("button");
	const taskDelete = document.createElement("button");

	tasksArea.append(taskContainer);
	taskContainer.append(checkContainer, textContainer);
	checkContainer.append(taskCheckLabel);
	textContainer.append(taskName, taskButtonsArea);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);
	taskButtonsArea.append(taskEdit, taskDelete);

	taskContainer.classList.add("task-container");
	checkContainer.classList.add("check-container");
	textContainer.classList.add("text-container");
	textContainer.setAttribute("data-key", obj["taskId"]);
	taskContainer.setAttribute("data-project", obj["project"]);
	taskCheckSpan.classList.add("input-span");
	taskCheckInput.setAttribute("type", "checkbox");
	taskButtonsArea.classList.add("task-button-area");
	taskEdit.classList.add("modify-button");
	taskDelete.classList.add("delete-button");

	taskName.innerText = obj["name"];
	taskEdit.innerText = "Modify";
	taskDelete.innerText = "Delete";

	textContainer.addEventListener("click", textContainerEventController);
	checkContainer.addEventListener("click", isChecked);
}

function renderModifiedTask(idProp, nameProp) {
	const textContainer = document.querySelector(`[data-key="${idProp}"]`);
	const taskName = textContainer.querySelector("p");

	taskName.innerText = nameProp;
}

const textContainerEventController = (e) => {
	if (e.target.classList.value == "modify-button") {
		modifyTask(e);
		return;
	} else if (e.target.classList.value == "delete-button") {
		deleteTask(e);
		console.log(tasks);
		return;
	} else {
		selectTask(e);
		showDetails();
	}
};

const selectTask = (e) => {
	const objKey = e.target.getAttribute("data-key");
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == objKey) {
			renderDetails(tasks[i], i);
			return;
		}
	}
};

const modifyTask = (e) => {
	const textContainer = e.composedPath()[2];
	const objKey = textContainer.getAttribute("data-key");
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == objKey) {
			modifyForm(tasks[i], i);
			return;
		}
	}
};

const deleteTask = (e) => {
	const taskContainer = e.composedPath()[3];
	const textContainer = e.composedPath()[2];
	taskContainer.classList.add("animate-out");
	const objKey = textContainer.getAttribute("data-key");
	setTimeout(() => {
		taskContainer.remove();
	}, 1000);

	pubSub.publish("task-ui-removed", objKey);
};

const filterTasksByProject = (e) => {
	const projectName = e.target.getAttribute("data-project");
	const tasksArea = document.querySelector(".tasks-area");
	const eligible = tasksArea.querySelectorAll(
		`[data-project="${projectName}"]`
	);
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const hTwo = tasksArea.querySelector("h2");

	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});

	[...eligible].forEach((item) => {
		if (!item.getAttribute("complete")) {
			item.classList.remove("no-display");
		}
	});
};

const filterTasksByDate = (e) => {
	const dateMenu = e.currentTarget.getAttribute("data-side-menu");
	const tasksArea = document.querySelector(".tasks-area");
	const hTwo = tasksArea.querySelector("h2");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	let eligible;

	if (dateMenu == "Past due") {
		eligible = tasksArea.querySelectorAll('[data-category="past-due"]');
	} else if (dateMenu == "Due today") {
		eligible = tasksArea.querySelectorAll('[data-category="due-today"]');
	} else if (dateMenu == "Due this week") {
		eligible = tasksArea.querySelectorAll('[this-week="true"]');
	}

	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});

	[...eligible].forEach((item) => {
		if (!item.getAttribute("complete")) {
			item.classList.remove("no-display");
		}
	});
};

const showAllTasks = () => {
	const tasksArea = document.querySelector(".tasks-area");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const hTwo = tasksArea.querySelector("h2");
	[...allTasks].forEach((item) => {
		if (item != hTwo && !item.getAttribute("complete")) {
			item.classList.remove("no-display");
		} else if (item.getAttribute("complete")) {
			item.classList.add("no-display");
		}
	});
};

const isChecked = (e) => {
	const taskContainer = e.currentTarget.parentElement;
	const dataKey = taskContainer
		.querySelector(".text-container")
		.getAttribute("data-key");
	// console.log(e.target);
	if (e.target.checked) {
		taskContainer.setAttribute("complete", "true");
		taskContainer.style.background = "#8ecc54";
		taskContainer.style.pointerEvents = "none";
		setTimeout(() => {
			taskContainer.classList.add("checked-animate-out");
		}, 1000);
		setTimeout(() => {
			taskContainer.classList.add("no-display");
		}, 2000);
		pubSub.publish("task-ui-removed", dataKey);
	}
	// else {
	// 	taskContainer.removeAttribute("complete");
	// 	taskContainer.style.background = "#e3f0ff";
	// 	taskContainer.classList.add("no-display");
	// }
};

const showCompleted = () => {
	const tasksArea = document.querySelector(".tasks-area");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const eligible = tasksArea.querySelectorAll('[complete="true"]');
	const hTwo = tasksArea.querySelector("h2");
	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});
	[...eligible].forEach((item) => {
		item.classList.remove("no-display");
		item.classList.remove("checked-animate-out");
	});
};

pubSub.subscribe("task-added", renderTask);
pubSub.subscribe("task-added", dateCategorizer.assignDateStatus);
pubSub.subscribe("task-ui-removed", removeTaskData);
pubSub.subscribe("task-modified", renderModifiedTask);

export {
	renderTaskHeading,
	renderTask,
	filterTasksByProject,
	showAllTasks,
	filterTasksByDate,
	showCompleted,
};
