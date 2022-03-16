import { action, makeObservable, observable, runInAction } from "mobx";
import { observer } from "mobx-react";
import React, { ChangeEvent } from "react";
import { addUser, deleteUser, editUser, getAllUsers } from "../../Controllers/SecondPageController";
import { iGetLogin } from "../../Interfaces/LoginInterface";
import RootStore from "../../store/RootStore";
import Header from "../Header/Header";
import ModalSecondPage from "./ModalSecondPage";
import { SecondPageStyle } from "./SecondPageStyle";

@observer
class SecondPage extends React.Component {
	@observable allPosts: iGetLogin[] = [];
	@observable search: string = "";
	@observable userId: number = 0;
	@observable button: string = "";

	constructor(props: any) {
		super(props)
		makeObservable(this)
	}
	componentDidMount() {
		this._getAllUsers();
	}

	_getAllUsers() {
		getAllUsers().then((res: iGetLogin[]) => {
			runInAction(() => {
				this.allPosts = res
			})
		}).catch((error: string) => {
			console.error(`Что-то пошло не так ${error}`)
		})
	}

	deleteUser(id: number) {
		deleteUser(id).then((res) => {
			this._getAllUsers()
		}).catch((error) => {
			console.error(`Не получилось удалить ${error}`)
		})
	}
	@action
	openModal(button: string): void {
		this.button = button;
		RootStore.eventStore.isOpen = true;
	}
	setSearch(searchtext: string) {
	}
	@action
	closeModal() {
		runInAction(() => {
			RootStore.eventStore.isOpen = false;
		})
	}

	render() {
		let id: number = 0;
		const sendOnEdit = (name: string, userName: string, email: string, phone: string, password: string) => {

			if (this.button === "add") {
				addUser(name, userName, email, phone, password).
					then(() => {
						this.closeModal();
						this._getAllUsers();
					})
					.catch((error: string) => {
						console.error(`УПС мы не смогли добавить нового пользователя ${error}`);
					})
			} else if (this.button === "edit") {
				editUser(id, name, userName, email, phone, password).
					then(() => {
						this.closeModal();
						this._getAllUsers();
					})
					.catch((error: string) => {
						console.error(`Не получилось редактировать пользователя ${error}`)
					})
			}
		}

		return (
			<>
				<Header />
				<SecondPageStyle>
					<div className="addButton">
						<input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => this.setSearch(event.target.value)} placeholder="Search" />
						<button onClick={() => this.openModal('add')}>Добавить пользователя</button>
					</div>
					<div className="table-users">
						<div className="content-table">
							{this.allPosts && this.allPosts.map((el: iGetLogin) => {
								id = el.id;
								return (<li key={el.id}>
									<p>Имя пользователя</p>
									<span>{el.name}</span>
									<p>Почта</p>
									<span>{el.email}</span>
									<p>Номер телефона</p>
									<span>{el.phone}</span>
									{Number(localStorage.getItem('id')) !== el.id && (
										<button onClick={() => this.deleteUser(el.id)}>Удалить</button>
									)}
									<button onClick={() => {
										this.openModal('edit')
										this.userId = el.id
									}}>Редактировать</button>
								</li>)
							})}
						</div>
					</div>
					{RootStore.eventStore.isOpen && (
						< ModalSecondPage
							idUser={id}
							button={this.button}
							closeModal={this.closeModal}
							sendOnEdit={sendOnEdit} />
					)}

				</SecondPageStyle>
			</>

		)
	}

}
export default SecondPage;