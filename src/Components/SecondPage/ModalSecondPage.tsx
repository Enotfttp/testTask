import { action, makeObservable, observable } from "mobx";
import React, { ChangeEvent } from "react";
import { iModal } from "../../Interfaces/SecondPageInterface";
import { StyledModalSecondPage } from "./SecondPageStyle";
import cross from "../../assign/cross.png"
import { observer } from "mobx-react";

@observer
class ModalSecondPage extends React.Component<iModal> {
	@observable email: string = "";
	@observable name: string = "";
	@observable phone: string = "";
	@observable userName: string = "";
	@observable password: string = "";

	constructor(props: iModal) {
		super(props)
		makeObservable(this)
	}
	@action
	textSend(value: string, typeText: string): void {
		typeText === 'email' ? this.email = value : typeText === 'name' ? this.name = value : typeText === 'phone' ? this.phone = value : typeText === 'username' ? this.userName = value : this.password = value
	}

	render() {

		return (
			<>
				<StyledModalSecondPage>
					<div className="modal">
						<img src={cross} alt="Тут должен быть крестик" className="cross" onClick={() => this.props.closeModal()} />
						<div className="block-input">
							<input type="text" placeholder="Name" onChange={(event: ChangeEvent<HTMLInputElement>) => this.textSend(event.target.value, 'name')} />
							<input type="text" placeholder="UserName" onChange={(event: ChangeEvent<HTMLInputElement>) => this.textSend(event.target.value, 'username')} />
							<input type="text" placeholder="Email" onChange={(event: ChangeEvent<HTMLInputElement>) => this.textSend(event.target.value, 'email')} />
							<input type="text" placeholder="Phone" onChange={(event: ChangeEvent<HTMLInputElement>) => this.textSend(event.target.value, 'phone')} />
							<input type="text" placeholder="Password" onChange={(event: ChangeEvent<HTMLInputElement>) => this.textSend(event.target.value, 'password')} />
						</div>
						<button onClick={() => this.props.sendOnEdit(this.name, this.userName, this.email, this.phone, this.password)}>{this.props.button === "edit" ? "Редактировать" : "Добавить"}</button>
					</div>
				</StyledModalSecondPage>
			</>
		)
	}
}
export default ModalSecondPage