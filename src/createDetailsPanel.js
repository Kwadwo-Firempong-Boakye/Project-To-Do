function renderDetails(
	taskTitle = "Lorem Ipsum",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskProject = "General",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const detailsArea = document.querySelector(".details-area");
    const ticker = document.createElement("div");
	const detailsTitle = document.createElement("h3");
	const description = document.createElement("p");
	const project = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");


	detailsArea.append(tickBox, detailsTitle, description, project, dueDate, priority);
	detailsTitle.classList.add("details-title");
	description.classList.add("task-description");
	project.classList.add("project");
	dueDate.classList.add("due-date");
	priority.classList.add("priority");

	detailsTitle.innerText = taskTitle;
	description.innerText = taskDescription;
	project.innerText = taskProject;
	dueDate.innerText = taskDueDate;
	priority.innerText = taskPriority;

}

export default renderDetails;
