function renderTaskHeading(data) {
	const tasksArea = document.querySelector(".tasks-area");
	const tasksAreaOverlay = document.createElement("div");
	const heading = document.createElement("h2");

	tasksArea.append(tasksAreaOverlay, heading);

	tasksAreaOverlay.classList.add("tasks-area-overlay", "no-display");
	heading.innerText = data;
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
	});
}

export { renderTaskHeading, renderTask };
