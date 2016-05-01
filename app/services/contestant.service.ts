import {Contestant} from '../models/contestantModel';
import {CONTESTANTS} from '../contestants';

export class ContestantService {
	getContestants(){
		return CONTESTANTS;
	}
	addContestant(bib,name,surname,nation){
		CONTESTANTS.push({"bib":bib,"name":name,"surname":surname,"nation":nation});
	}
}