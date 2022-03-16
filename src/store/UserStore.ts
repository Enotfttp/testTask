import { makeObservable, observable } from "mobx";
import { iGetLogin } from "../Interfaces/LoginInterface";
import RootStore from "./RootStore";


export interface IUserStore extends iGetLogin {
	root: typeof RootStore;
}
export class UserStore implements IUserStore {
	@observable id = 0;
	@observable email = "";
	@observable password = "";
	@observable name = "";
	@observable phone = "";
	@observable username = "";
	@observable root: typeof RootStore;

	constructor(root: typeof RootStore) {
		this.root = root;
		makeObservable(this)
	}


}