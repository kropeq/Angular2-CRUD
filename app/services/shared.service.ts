import {Component, Injectable,Input,Output,EventEmitter} from 'angular2/core';

@Injectable()
export class sharedService {
  @Output() fire:EventEmitter<any>=new EventEmitter();

   constructor(){
     console.log('shared service started');
   }

   change()
   {
    console.log('change started'); 
     this.fire.emit(document.cookie.split("=")[1]);
   }

   getEmittedValue()
   {
     return this.fire;
   }

} 