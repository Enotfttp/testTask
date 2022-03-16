import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRouters = () => {
	return localStorage.getItem('token') ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRouters