import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  date : string[]=[];

  addDate(value : string){
    this.date.push(value);
  }
  getDateArray():string[]{
    
    return this.date;
  }
  
}
