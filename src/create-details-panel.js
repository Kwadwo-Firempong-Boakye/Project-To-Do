import back from "./Images/arrow.png";

function renderDetails(
	taskTitle = "Lorem Ipsum",
	taskProject = "General",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");
	const tasksAreaOverlay = document.querySelector(".tasks-area-overlay");
	const backArrow = document.createElement("img");
	const detailsTitle = document.createElement("h3");
	const project = document.createElement("p");
	const priority = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");

	detailsArea.append(
		backArrow,
		detailsTitle,
		project,
		priority,
		description,
		dueDate
	);

	backArrow.classList.add("back-arrow");
	detailsTitle.classList.add("details-title");
	project.classList.add("project");
	priority.classList.add("priority");
	description.classList.add("task-description");
	dueDate.classList.add("due-date");

	backArrow.setAttribute("src", back);
	detailsTitle.innerText = taskTitle;
	project.innerText = taskProject;
	description.innerText = taskDescription;
	dueDate.innerHTML = `<span class="due-text">Due date</span> <br><br> ${taskDueDate}`;
	priority.innerText = taskPriority;

	backArrow.addEventListener("click", () => {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		// tasksAreaOverlay.classList.add("no-display");
	});
}

export default renderDetails;
