import {Component} from 'angular2/core';

import {User} from '../models/userModel';
import {UserService} from '../services/user.service';


@Component({
	selector: 'my-contestants',
	template: `
		<div id="contestants">
			<div class="table">
				<div class="singleUser">
					<div class="cell">Name</div>
					<div class="cell">Pass</div>
				</div>
				<div class="singleUser" *ngFor="#user of users" (click)="FillOnClick(user.username)">
					<div class="cell">{{user.username}}</div>
					<div class="cell">{{user.password}}</div>
				</div>
			</div>
			<div *ngIf="currentUser">{{currentUser}}</div>
		</div>
	`
})

export class ContestantsComponent { 
	//users : User[] = [];

	currentUser = "";
	constructor(private userService: UserService) { }
	users = this.userService.getUsers();

	FillOnClick(user){
		if(this.currentUser === user ){
			this.currentUser = '';
			return;
		} 
		this.currentUser = user;
	}

}