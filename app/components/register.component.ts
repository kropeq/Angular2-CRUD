import {Component} from 'angular2/core';
import {User} from '../models/userModel';
import {UserService} from '../services/user.service';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'register',
	template: `
	<div id="logging">
		<h1> REJESTRACJA </h1>
		<label id="label1"> {{title}} </label>
		<input #box placeholder="login" [ngModel]="login" (keyup)="login=box.value">
		<label> Wpisz hasło </label>
		<input #box2 type="password" placeholder="hasło" [ngModel]="password" (keyup)="password=box2.value">
		<label> Powtórz hasło </label>
		<input #box3 type="password" placeholder="powtórz" [ngModel]="retyped" (keyup)="retyped=box3.value">
		<button (click)="onClickMe()">Zarejestruj</button>
	</div>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [UserService]
})

export class RegisterComponent { 
	title = "Wpisz login";
	login='';
	password='';
	retyped='';
	users: User[];
	user: User;

	constructor(private userService: UserService, private router: Router){ }

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

		// sprawdzamy poprawność wpisanego nicku
		var pat_name = new RegExp("^[a-z0-9]{3,16}$");
		var pat_pass = new RegExp("^[a-zA-Z0-9]{6,16}$");
		if(pat_name.test(inputs.username) && pat_pass.test(inputs.password)){
			// przeszukanie listy userów w celu określenia,
			// czy istnieje już taki user, a jeśli tak, 
			// to nie można rejestrować
			users.forEach(function(element) {
				if(element.username === inputs.username) 
					jest = true;
			});
			// jeśli istnieje taki user
			if(jest === true ){
				alert("Taki użytkownik już istnieje. Wybierz inny.");
			// jeśli któreś z pól nie jest wypełnione
			} else if (inputs.username === "" 
				|| inputs.password === "" || inputs.retyped === ""){
				alert("Uzupełnij wszystkie pola.");
			// jeśli nazwa jest wolna oraz są uzupełnione pola
			} else if(jest !== true && inputs.username !== "" && 
				inputs.password !== "" && inputs.retyped !== ""){
				// jeśli hasło zgadza się z powtórzonym hasłem
				if(inputs.password === inputs.retyped){
					this.addUser(this.login,this.password);
					alert("Dziękujemy za rejestrację!");
					this.login = "";
					this.password = "";
					this.retyped = "";
					this.router.navigate(['Login']);
				} else {
					alert("Hasła się nie zgadzają.");
					this.password = "";
					this.retyped = "";
				}
			} 
		} else {
			alert("Nie przeszło validacji nicku lub hasła!");
		}
	}
}