import {Component} from 'angular2/core';

import {Contestant} from '../models/contestantModel';
import {ContestantService} from '../services/contestant.service';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';


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
					<button (click)="onUpdate()">Aktualizuj</button>
				</div>
			</div>
		</div>
	`,
	directives: [
		ROUTER_DIRECTIVES
	]
})

export class ContestantsComponent { 
	//users : User[] = [];
	bib : number;
	name = "";
	surname = "";
	nation = "";

	loggedAs = document.cookie.split("=")[1];

	currentContestant = "";
	constructor(private contestantService: ContestantService, private router: Router) { }
	contestants = this.contestantService.getContestants();

	// funkcja sluzaca do wyciagniecia indeksu w tablicy wybranego zawodnika
	checkIndex(){
		var listOfContestants = this.contestantService.getContestants();
		var inputs = {bib:this.bib,name:this.name,surname:this.surname,nation:this.nation};
		var id = 0;
		var index;
		// szukamy czy jest taki numer startowy w liście
		listOfContestants.forEach(function(element) {
			if(element.bib === inputs.bib){
				index = id;
			}
			id++;
		});
		return index;
	}

	onAdd(){
		var index = this.checkIndex();
		if(this.isValid(this.name) && this.isValid(this.surname) && 
			this.isValid(this.nation) && this.isNumber(this.bib)){
			if(index || index==0){
				alert("Ten numer startowy jest zajęty.");
			} else if(this.bib > 0 && this.bib < 51){
				this.contestantService.addContestant(this.bib,this.name,this.surname,this.nation);
				this.clear();
				this.router.navigate(['Contestants']);
				this.onAdd();
			} else {
				alert("Niepoprawny numer startowy");
			}
		}
	}

	clear(){
		this.currentContestant = "";
		this.bib = undefined;
		this.name = "";
		this.surname = "";
		this.nation = "";
	}
	
	// sprawdzenie czy wpisano numer
	isNumber(element){
		var pattern = new RegExp("^[0-9]+$");
		if(pattern.test(element)){
			return true;
		} else {
			return false;
		}
	}

	// sprawdzenie czy wpisano poprawnie Imie / Nazwisko / Kraj
	isValid(element){
		var pattern = new RegExp("^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[a-ząćęłńóśźż]+$");
		if(pattern.test(element)){
			return true;
		} else {
			return false;
		}
	}
	
	onRemove(){
		// jeśli jest taki element w liście, usuwamy
		var index = this.checkIndex();
		if(this.isNumber(this.bib)){
			if(index || index==0){
				this.contestantService.removeContestant(index);
				this.clear();
				this.router.navigate(['Contestants']);
			} else {
				alert("Nie ma zawodnika z takim numerem!");
			}
		} else {
			alert("Niepoprawnie wpisany numer zawodnika");
		}
	}

	onUpdate(){
		var index = this.checkIndex();
		if(this.isValid(this.name) && this.isValid(this.surname) && 
			this.isValid(this.nation) && this.isNumber(this.bib)){
			if(index){
				this.contestantService.updateContestant(index,this.bib,this.name,this.surname,this.nation);
				this.router.navigate(['Contestants']);
			} else {
				alert("Nie ma zawodnika z takim numerem!");
			}
		} else {
			alert("Nie wszystkie pola są poprawnie uzupełnione");
		}
	}

	// uzupełnia formularz CRUD po kliknięciu na wiersz w liście
	FillOnClick(contestant){
		this.bib = contestant.bib;
		this.name = contestant.name;
		this.surname = contestant.surname;
		this.nation = contestant.nation;
		if(this.currentContestant === contestant ){
			this.clear();
			return;
		} 
		this.currentContestant = contestant;
	}

}