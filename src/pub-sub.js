class PubSub {
	constructor() {
		this.tracker = {
			//key: activityName, value: [funcs]
		};
	}
	subscribe(activityName, func) {
		if (this.tracker[activityName]) {
			this.tracker[activityName].push(func);
		} else {
			this.tracker[activityName] = [func];
		}
	}

	unsubscribe(activityName, func) {
		const funcArray = this.tracker[activityName];
		const funcIndex = funcArray.indexOf(func);
		if (funcIndex > -1) {
			funcArray.splice(funcIndex, 1);
		}
	}

	publish(activityName, ...args) {
		if (Array.isArray(this.tracker[activityName])) {
			this.tracker[activityName].forEach((item) => {
				item.apply(null, args);
			});
		}
	}
}

const pubSub = new PubSub();

export default pubSub;
