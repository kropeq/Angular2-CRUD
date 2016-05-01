import {Component} from 'angular2/core';
import {User} from '../models/userModel';
import {UserService} from '../services/user.service';

@Component({
	selector: 'register',
	template: `
	<div id="logging">
		<h1> REJESTRACJA </h1>
		<label id="label1"> {{title}} </label>
		<input #box placeholder="login" [ngModel]="login" (keyup)="login=box.value">
		<label> Wpisz hasło </label>
		<input #box2 placeholder="hasło" [ngModel]="password" (keyup)="password=box2.value">
		<label> Powtórz hasło </label>
		<input #box3 placeholder="powtórz" [ngModel]="retyped" (keyup)="retyped=box3.value">
		<button (click)="onClickMe()">Zarejestruj</button>
	</div>
	`,
	providers: [UserService]
})

export class RegisterComponent { 
	title = "Wpisz login";
	login='';
	password='';
	retyped='';
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
		var inputs = {username:this.login, password: this.password, retyped: this.retyped};
		// sprawdzanie czy jest w liscie uzytkownikow
		// jesli nie, to go dodaje
		
		users.forEach(function(element) {
			if(element.username === inputs.username) 
				jest = true;
		})
		if(jest === true ){
			alert("Taki użytkownik już istnieje. Wybierz inny.");
		} else if (inputs.username === "" 
			|| inputs.password === "" || inputs.retyped === ""){
			alert("Uzupełnij wszystkie pola.");
		} else if(jest !== true && inputs.username !== "" && inputs.password !== ""){
			if(inputs.password === inputs.retyped){
				this.addUser(this.login,this.password);
				alert("Dziękujemy za rejestrację!");
				this.login = "";
				this.password = "";
				this.retyped = "";
			} else {
				alert("Hasła się nie zgadzają.");
				this.password = "";
				this.retyped = "";
			}
		} 
	}
}