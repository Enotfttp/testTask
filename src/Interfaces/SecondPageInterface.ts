export interface iModal {
	idUser: number;
	button: string;
	closeModal: () => void;
	sendOnEdit: (name: string, userName: string, email: string, phone: string, password: string) => void;
}