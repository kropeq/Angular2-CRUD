import {User} from '../models/userModel';
import {USERS} from '../users';

export class UserService {
	//getUsers() : User[]{
	getUsers() {
		return USERS;
	}
	addUser(user,pass){
		USERS.push({"username":user,"password":pass});
	}
}
