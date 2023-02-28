function renderTaskArea(data) {
	const menuArea = document.querySelector(".menu-area");
	const tasksArea = document.querySelector(".tasks-area");
	const tasksAreaOverlay = document.createElement("div");
	const heading = document.createElement("h2");

	tasksArea.append(tasksAreaOverlay, heading);

	tasksAreaOverlay.classList.add("tasks-area-overlay", "no-display");
	heading.innerText = data;

	tasksAreaOverlay.addEventListener("click", () => {
		menuArea.classList.add("hide-side-menu");
		menuArea.classList.add("no-display");
		tasksAreaOverlay.classList.add("no-display");
	});

	// tasksArea.addEventListener("click", () => {
	// 	console.log("clicked");
	// });
}

function renderTask(
	taskTitle = "Lorem Ipsum Qwerty asdf hjk xcvbnm",
	taskProject = "General",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const tasksArea = document.querySelector(".tasks-area");
	const taskContainer = document.createElement("div");
	const taskCheckLabel = document.createElement("label");
	const taskCheckInput = document.createElement("input");
	const taskCheckSpan = document.createElement("span");
	const taskName = document.createElement("p");
	const taskEdit = document.createElement("button");
	const detailsArea = document.querySelector(".details-area");
	const tasksAreaOverlay = document.querySelector(".tasks-area-overlay");

	tasksArea.append(taskContainer);
	taskContainer.append(taskCheckLabel, taskName, taskEdit);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);

	taskContainer.classList.add("task-container");
	taskCheckInput.setAttribute("type", "checkbox");

	taskName.innerText = taskTitle;
	taskEdit.innerText = "Modify";

	taskContainer.addEventListener("click", () => {
		// tasksAreaOverlay.classList.remove("no-display");
		detailsArea.classList.remove("no-display");
		detailsArea.classList.remove("hide-details-panel");
		tasksArea.classList.add("no-pointer-events");
	});
}

export { renderTaskArea, renderTask };
