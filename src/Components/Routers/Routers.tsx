import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRouters from "./ProtectedRouters";
import SecondPage from "../SecondPage/SecondPage";
import Login from "../Login/Login";


class Routers extends React.Component {

	render() {

		return (
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route element={<ProtectedRouters />} >
						<Route path="/main" element={<SecondPage />} />
					</Route >
				</Routes>
			</Router >
		)
	}
}
export default Routers