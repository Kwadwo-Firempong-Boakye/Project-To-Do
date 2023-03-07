import pubSub from "./pub-sub";

//Data storage array;
let tasks = [];

// Function to create task ID
const idGenerator = () => {
	let idNumber = 100;
	const getIdNumber = () => idNumber;
	const increaseIdNumber = () => idNumber++;
	return {
		getIdNumber,
		increaseIdNumber,
	};
};

//Function to store data
const storeData = (obj) => {
	tasks.push(obj);
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
	storeData(taskObject);
	pubSub.publish("task-added", taskObject);
	// console.log(tasks);
};

const testPubSub = (x) => {
	console.log(x);
};

pubSub.subscribe("task-added", testPubSub);

export { createTaskData };
