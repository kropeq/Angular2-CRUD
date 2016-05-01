import {Component} from 'angular2/core';
import {User} from '../models/userModel';
import {UserService} from '../services/user.service';

@Component({
	selector: 'log-in',
	template: `
	<div id="logging">
		<label id="label1"> {{title}} </label>
		<input #box (keyup)="login=box.value">
		<label> Wpisz hasło </label>
		<input #box2 (keyup)="password=box2.value">
		<button (click)="onClickMe()">Zaloguj</button>
	</div>
	`,
	providers: [UserService]
})

export class LoginComponent { 
	title = "Wpisz login";
	login='';
	password='';
	users: User[];
	user: User;

	constructor(private userService: UserService){ }

	getUsers(){
		return this.userService.getUsers();
	}

	addUser(user,pass){
		this.userService.addUser(user,pass);
	}

	onClickMe(){
		var users = this.getUsers();

		var jest = false;
		var inputs = {username:this.login, password: this.password};
		// sprawdzanie czy jest w liscie uzytkownikow
		// jesli nie, to go dodaje
		
		users.forEach(function(element) {
			if(element.username === inputs.username && 
				element.password === inputs.password) jest = true;
			alert(element.username);
		})
		if(jest !== true && inputs.username !== ""){
			this.addUser(this.login,this.password);
			alert("USER DODANY!");
		} else {
			alert("ZALOGOWANO!");
		}
	}
}