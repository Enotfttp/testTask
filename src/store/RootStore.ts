import { EventStore, IEventStore } from "./EventStore";
import { IUserStore, UserStore } from "./UserStore";

export interface IRootStore {
	eventStore: IEventStore;
	userStore: IUserStore;
}

class RootStore implements IRootStore {
	eventStore: IEventStore;
	userStore: IUserStore;

	constructor() {
		this.eventStore = new EventStore(this)
		this.userStore = new UserStore(this)
	}
}

export default new RootStore()
