import back from "./Images/arrow.png";

function renderDetails(obj) {
	const detailsArea = document.querySelector(".details-area");
	const detailsInfoContainer = document.createElement("div");
	const backArrow = document.createElement("img");
	const detailsTitle = document.createElement("h3");
	const project = document.createElement("p");
	const priority = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");

	detailsArea.append(detailsInfoContainer);
	detailsInfoContainer.append(
		backArrow,
		detailsTitle,
		project,
		priority,
		description,
		dueDate
	);

	detailsInfoContainer.classList.add("details-info-container");
	backArrow.classList.add("back-arrow");
	detailsTitle.classList.add("details-title");
	project.classList.add("project");
	priority.classList.add("priority");
	description.classList.add("task-description");
	dueDate.classList.add("due-date");

	backArrow.setAttribute("src", back);
	detailsTitle.innerText = obj["name"];
	project.innerText = obj["project"];
	description.innerText = obj["desc"];
	dueDate.innerHTML = `<span class="due-text">Due date</span> <br><br> ${obj["date"]}`;
	priority.innerText = obj["priority"];

	backArrow.addEventListener("click", clearDetails);
}

const clearDetails = () => {
	const detailsInfoContainer = document.querySelector(
		".details-info-container"
	);
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	if (detailsInfoContainer) {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		setTimeout(() => {
			detailsInfoContainer.remove();
		}, 250);
	}
};

const showDetails = () => {
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	detailsArea.classList.remove("no-display");
	setTimeout(() => {
		detailsArea.classList.remove("hide-details-panel");
		tasksArea.classList.add("no-pointer-events");
	}, 10);
};

export { renderDetails, clearDetails, showDetails };
