function renderTaskHeading(data = "All Tasks") {
	const tasksArea = document.querySelector(".tasks-area");
	const heading = document.createElement("h2");

	tasksArea.append(heading);
	heading.innerText = data;
}

function renderTask(taskTitle = "Lorem Ipsum Qwerty asdf hjk xcvbnm", taskId) {
	const tasksArea = document.querySelector(".tasks-area");
	const taskContainer = document.createElement("div");
	const checkContainer = document.createElement("div");
	const textContainer = document.createElement("div");
	const taskCheckLabel = document.createElement("label");
	const taskCheckInput = document.createElement("input");
	const taskCheckSpan = document.createElement("span");
	const taskName = document.createElement("p");
	const taskEdit = document.createElement("button");
	const detailsArea = document.querySelector(".details-area");

	tasksArea.append(taskContainer);
	taskContainer.append(checkContainer, textContainer);
	checkContainer.append(taskCheckLabel);
	textContainer.append(taskName, taskEdit);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);

	taskContainer.classList.add("task-container");
	checkContainer.classList.add("check-container");
	textContainer.classList.add("text-container");
	textContainer.setAttribute("data-key", taskId);
	taskCheckSpan.classList.add("input-span");
	taskCheckInput.setAttribute("type", "checkbox");

	taskName.innerText = taskTitle;
	taskEdit.innerText = "Modify";

	textContainer.addEventListener("click", (e) => {
		let modifyButton = textContainer.querySelector("button");
		if (e.target == modifyButton) {
			return;
		} else {
			detailsArea.classList.remove("no-display");
			setTimeout(() => {
				detailsArea.classList.remove("hide-details-panel");
				tasksArea.classList.add("no-pointer-events");
			}, 10);
		}
	});
}

export { renderTaskHeading, renderTask };
