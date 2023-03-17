import { tasks, projectsUi } from "./create-task-data";
import pubSub from "./pub-sub";
import { addProject } from "./create-home";

const localStorageCommitTasks = () => {
	let serializedTasks = JSON.stringify(tasks);
	localStorage.setItem("taskData", serializedTasks);
	console.warn("local storage taskData updated");
};

const localStorageRetrieveTasks = () => {
	let deserializedTasks = JSON.parse(localStorage.getItem("taskData"));
	return deserializedTasks;
};

const localStorageCommitProjects = () => {
	let serializedProjects = JSON.stringify(projectsUi);
	localStorage.setItem("projectsData", serializedProjects);
	console.warn("local storage projectData updated");
};

const localStorageRetrieveProjects = () => {
	let deserializedProjects = JSON.parse(localStorage.getItem("projectsData"));
	return deserializedProjects;
};

const pageLoader = () => {
	let localStorageTaskData = localStorageRetrieveTasks();
	let localStorageProjectData = localStorageRetrieveProjects();

	if (localStorageTaskData) {
		localStorageTaskData.forEach((task, i, a) => {
			pubSub.publish("task-added", task);
		});
	}
	if (localStorageProjectData) {
		localStorageProjectData.forEach((project, i) => {
			if (i > 0) {
				addProject(project);
			}
		});
	}
};

export {
	localStorageCommitTasks,
	localStorageCommitProjects,
	localStorageRetrieveTasks,
	localStorageRetrieveProjects,
	pageLoader,
};
