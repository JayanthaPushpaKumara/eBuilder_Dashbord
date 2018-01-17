import { Component, OnInit } from '@angular/core';
import { InputControls } from './inputControls';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  messageTypes = ['Create Return', 'Event Message', 'Process Return', 'Stock Sync'];
  regions = ["-All-","APAC" , "brazil" , "east asia" , "europe" , "latin america" , "middle east" , "north america"];
  marcketUnits =  ["-All-","MU Benelux" ,  "MU Brazil" ,  "MU CHATA" ,  "MU Central & Eastern Europe" , "MU Commonwealth Independent States" ,  "MU France" , "MU Germany" , "MU Greater China" ,  "MU Iberia" ,  "MU India" ,  "MU Latin America" ,  "MU Middle East and Africa" ,  "MU Nordic & BALTIC" ,  "MU North America" ,  "MU SEA and Oceania" ,  "MU SEM" ,  "MU UK & Ireland"]

  model = new InputControls(this.regions[0],this.marcketUnits[0],'2017-10-01','2018-01-01',this.messageTypes[0],'site country');

  constructor() { }

  ngOnInit() {
  }


  // get diagnostic() { return JSON.stringify(this.model); }

  myFunc(){
    console.log(JSON.stringify(this.model));
  }

}