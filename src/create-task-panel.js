function renderTaskHeading(data = "All Tasks") {
	const tasksArea = document.querySelector(".tasks-area");
	const heading = document.createElement("h2");

	tasksArea.append(heading);
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


	tasksArea.append(taskContainer);
	taskContainer.append(taskCheckLabel, taskName, taskEdit);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);

	taskContainer.classList.add("task-container");
	taskCheckInput.setAttribute("type", "checkbox");

	taskName.innerText = taskTitle;
	taskEdit.innerText = "Modify";

	taskContainer.addEventListener("click", () => {
		detailsArea.classList.remove("no-display");
		setTimeout(() => {
			detailsArea.classList.remove("hide-details-panel");
			tasksArea.classList.add("no-pointer-events");
		}, 10);
	});
}

export { renderTaskHeading, renderTask };
