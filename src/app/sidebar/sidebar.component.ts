import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Region, MarcketUnit } from './model/inputControls.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit  {

  datePickerConfig : Partial<BsDatepickerConfig>;

  constructor(){
    this.datePickerConfig =   Object.assign({},{
      containerClass : 'theme-dark-blue', 
      showWeekNumbers : false,
      dateInputFormat : 'YYYY/MM/DD'
    });
  }

  ngOnInit(){
    var d = new Date();
    d.setDate(d.getDate()-7);

    this.fromDate = d;    
    this.toDate = new Date();
  }

  public toDate;
  public fromDate;

  region = 'All';

  regions: Region[] = [
    { name: 'All' },
    { name: 'APAC' },
    { name: 'brazil' },
    { name: 'east asia' },
    { name: 'europe' },
    { name: 'latin america' },
    { name: 'middle east' },
    { name: 'north america' }
  ];

  marcketUnit = 'All';

  marcketUnits: MarcketUnit[] = [
    { name: 'All' },
    { name: 'MU Benelux' },
    { name: 'MU Brazil' },
    { name: 'MU CHATA' },
    { name: 'MU Central & Eastern Europe' },
    { name: 'MU Commonwealth Independent States' },
    { name: 'MU France' },
    { name: 'MU Germany' },
    { name: 'MU Greater China' },
    { name: 'MU Iberia' },
    { name: 'MU India' },
    { name: 'MU Latin America' },
    { name: 'MU Middle East and Africa' },
    { name: 'MU Nordic & BALTIC' },
    { name: 'MU North America' },
    { name: 'MU SEA and Oceania' },
    { name: 'MU SEM' },
    { name: 'MU UK & Ireland' }
  ];

  siteCountry = 'All';
  siteId = 'All';

   

  getData(inputForm: NgForm): void {
    console.log(inputForm.value)
  }
}
