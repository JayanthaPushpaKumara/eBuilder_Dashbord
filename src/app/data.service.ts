import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }


  public dataset1 : any;
  public globalVar = '';

  date : string[]=[];

  addDate(value : string){
    this.date.push(value);
  }
  getDateArray():string[]{
    
    return this.date;
  }
  
}
