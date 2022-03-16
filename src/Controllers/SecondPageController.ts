import axios from "axios";
import { v5 as uuid } from 'uuid';

export const getAllUsers = () => {
	return axios.get(`http://localhost:8000/users`, {}).then((res) => {
		return res.data
	})
}

export const deleteUser = (id: number) => {
	return axios.delete(`http://localhost:8000/users/${id}`, {}).then((res) => {
		return res.data
	})
}
export const addUser = (name: string, username: string, email: string, phone: string, password: string) => {
	const test = {
		name: name,
		password: password,
		username: username,
		email: email,
		phone: phone,
		id: uuid
	}
	return axios.post(`http://localhost:8000/users`, {
		name: name,
		password: password,
		username: username,
		email: email,
		phone: phone,
		id: uuid
	}).then((res) => {
		return res.data
	})
}
export const editUser = (id: number, name: string, username: string, email: string, phone: string, password: string) => {
	return axios.put(`http://localhost:8000/users/${id}`, {
		name: name,
		password: password,
		username: username,
		email: email,
		phone: phone,
	}).then((res) => {
		return res.data
	})
}