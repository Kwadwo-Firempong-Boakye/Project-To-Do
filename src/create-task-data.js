import pubSub from "./pub-sub";

//Data storage array;
let tasks = [];

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

	taskIdentityNumber.increaseIdNumber();
	storeTaskData(taskObject);
	pubSub.publish("task-added", taskObject);
};

//Function to store data
const storeTaskData = (obj) => {
	tasks.push(obj);
};

const removeTaskData = (key) => {
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == key) {
			tasks.splice(i, 1);
			return;
		}
	}
};

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

export { tasks, createTaskData, removeTaskData, modifyTaskData };
