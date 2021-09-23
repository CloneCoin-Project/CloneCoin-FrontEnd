import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const fetchAllUser = async () => {
	// let url = process.env.REACT_APP_CLONECOIN_API_PATH + '/users';
	// let users = await axios.get(url);

	// return users;
}

const fetchOneUser = async ( id ) => {
	let url = process.env.REACT_APP_CLONECOIN_API_PATH + `/users/${id}?part=header`;

	let user = await axios.get(url, {
		headers: {
			Authorization: `Bearer `
		}
	});

	return user;
}

export {
	fetchAllUser,
	fetchOneUser
};