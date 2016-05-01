import {Component} from 'angular2/core';

import {User} from '../models/userModel';
import {UserService} from '../services/user.service';


@Component({
	selector: 'my-contestants',
	template: `
		<div id="contestants">
			<div>
				<div *ngFor="#user of users">
					<div> {{user.username}} {{user.password}} </div>
				</div>
			</div>
		</div>
	`
})

export class ContestantsComponent { 
	//users : User[] = [];
	constructor(private userService: UserService) { }
	users = this.userService.getUsers();

}