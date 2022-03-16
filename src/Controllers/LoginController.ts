import axios from "axios"

export const getLogin = (email: string, password: string) => {
	return axios.get(`http://localhost:8000/users?email=${email}&password=${password}`, {}).then((res) => {
		return res.data
	})
}
