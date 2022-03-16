import { makeObservable, observable } from "mobx";
import RootStore from "./RootStore";


export interface IEventStore {
	isOpen: boolean
	root: typeof RootStore;
}
export class EventStore implements IEventStore {
	@observable isOpen = false;
	root: typeof RootStore;

	constructor(root: typeof RootStore) {
		this.root = root;
		makeObservable(this)
	}

}