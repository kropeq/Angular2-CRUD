export class UserService {
	getUsers() : User[] {
		return users;
	}
	addUser(username,password){
		users.push({"username":username,"password":password});
	}
}

export class User {
	username: string;
	password: string;
}

var users: User[] = [
{"username":"admin","password":"admin2"}
];