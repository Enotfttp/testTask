import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import RootStore from "../../store/RootStore";
import HeaderStyled from "./HeaderStyled";

function Header() {

	const logout = (): void => {
		localStorage.removeItem("token")
		localStorage.removeItem("id")
	}
	const name = localStorage.getItem('token')


	return (
		<>
			<HeaderStyled>
				<header>
					<span>{name}</span>
					<NavLink to="/main">Главная</NavLink>
					<NavLink to="/" onClick={() => logout()} className="logout">Выход</NavLink>
				</header>
				<Outlet />
			</HeaderStyled>
		</>
	)
}


export default Header