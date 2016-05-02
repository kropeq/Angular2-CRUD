import {Component} from 'angular2/core';

import {Contestant} from '../models/contestantModel';
import {ContestantService} from '../services/contestant.service';


@Component({
	selector: 'my-contestants',
	template: `
		<div id="contestants">
			<div class="table">
				<div class="singleUser">
					<div class="cell">Numer</div>
					<div class="cell">Imie</div>
					<div class="cell">Nazwisko</div>
					<div class="cell">Kraj</div>
				</div>
				<div class="singleUser" *ngFor="#contestant of contestants" (click)="FillOnClick(contestant)">
					<div class="cell">{{contestant.bib}}</div>
					<div class="cell">{{contestant.name}}</div>
					<div class="cell">{{contestant.surname}}</div>
					<div class="cell">{{contestant.nation}}</div>
				</div>
			</div>
			<div class="userForm" *ngIf="loggedAs=='admin'">
				<label>Numer:</label>
				<input #box1 name="bib" placeholder="numer" [ngModel]="currentContestant.bib" (keyup)="bib=box1.value">
				<label>Imie:</label>
				<input #box2 name="name" placeholder="imie" [ngModel]="currentContestant.name" (keyup)="name=box2.value">
				<label>Nazwisko:</label>
				<input #box3 name="surname" placeholder="nazwisko" [ngModel]="currentContestant.surname" (keyup)="surname=box3.value">
				<label>Kraj:</label>
				<input #box4 name="nation" placeholder="kraj" [ngModel]="currentContestant.nation" (keyup)="nation=box4.value">
				<div class="buttons">
					<button (click)="onAdd()">Dodaj</button>
					<button (click)="onRemove()">Usuń</button>
					<button>Aktualizuj</button>
				</div>
			</div>
		</div>
	`
})

export class ContestantsComponent { 
	//users : User[] = [];
	bib : number;
	name = "";
	surname = "";
	nation = "";

	loggedAs = document.cookie.split("=")[1];

	currentContestant = "";
	constructor(private contestantService: ContestantService) { }
	contestants = this.contestantService.getContestants();

	onAdd(){
		var busy = false;
		var inputs = {bib:this.bib, name:this.name, surname:this.surname, nation:this.nation};
		var listOfContestants = this.contestantService.getContestants();
		listOfContestants.forEach(function(element) {
			if(element.bib == inputs.bib) 
				busy = true;
		});
		if(busy){
			alert("Ten numer startowy jest zajęty.");
		} else if(inputs.bib > 0 && inputs.bib < 51 && busy !== true){
			this.contestantService.addContestant(this.bib,this.name,this.surname,this.nation);
		} else {
			alert("Błędny numer startowy.");
		}
	}

	onRemove(){
		var listOfContestants = this.contestantService.getContestants();
	}

	FillOnClick(contestant){
		this.bib = contestant.bib;
		this.name = contestant.name;
		this.surname = contestant.surname;
		this.nation = contestant.nation;
		if(this.currentContestant === contestant ){
			this.currentContestant = '';
			return;
		} 
		this.currentContestant = contestant;
	}

}