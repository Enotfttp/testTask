import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../Controllers/LoginController";
import { iGetLogin } from "../../Interfaces/LoginInterface";
import RootStore from "../../store/RootStore";
import LoginStyle from "./LoginStyle";


const Login = () => {
	let login: string = "";
	let password: string = "";
	let error: string = "";
	const navigate = useNavigate()
	const setLogin = (event: string): void => {
		login = event
	}
	const setPassword = (event: string): void => {
		password = event;
	}
	/*
	Login: test123
	Password: 12345
	*/
	const loginButton = (): void => {
		if (login && password) {
			getLogin(login, password).then((res: iGetLogin[]) => {
				checkUsers(res)
			}).catch((error) => {
				console.error(`Сервер упал ${error}`);
			})
		}
	}
	const checkUsers = (data: iGetLogin[]): void => {
		if (data.length != 0) {
			navigate('/main')
			data.forEach((el: iGetLogin) => {
				RootStore.userStore.id = el.id;
				RootStore.userStore.email = el.email;
				RootStore.userStore.name = el.name;
				RootStore.userStore.phone = el.phone;
				RootStore.userStore.username = el.username
				localStorage.setItem('token', el.name)
				localStorage.setItem('id', String(el.id))
			})
			console.log('Вошел');
		}
	}

	return (
		<>
			<LoginStyle>
				<h2>SIGN IN</h2>
				<label>Логин</label>
				<input onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} type="text" />
				<label >Пароль</label>
				<input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
				<div>
					<button onClick={loginButton}>Войти</button>
				</div>
			</LoginStyle>

		</>
	)
}
export default Login
