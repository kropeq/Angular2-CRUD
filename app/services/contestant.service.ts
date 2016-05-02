import {Contestant} from '../models/contestantModel';
import {CONTESTANTS} from '../contestants';

export class ContestantService {
	getContestants(){
		return CONTESTANTS;
	}
	addContestant(bib,name,surname,nation){
		CONTESTANTS.push({"bib":bib,"name":name,"surname":surname,"nation":nation});
	}
	removeContestant(index){
		CONTESTANTS.splice(index,1);
	}
	updateContestant(index,bib,name,surname,nation){
		CONTESTANTS.splice(index,1,{"bib":bib,"name":name,"surname":surname,"nation":nation});
	}
}