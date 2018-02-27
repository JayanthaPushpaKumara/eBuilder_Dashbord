import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Region, MarcketUnit } from './model/inputControls.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
=======
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { SiteSuccessAndFailMessagesComponent } from '../frame/site-success-and-fail-messages/site-success-and-fail-messages.component';
>>>>>>> master

@Component({
  providers: [SiteSuccessAndFailMessagesComponent],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

<<<<<<< HEAD
  constructor(private http: HttpClient, private dataService: DataService, private datePipe: DatePipe) {
=======
  constructor(private http: HttpClient, private dataService: DataService, private datePipe: DatePipe, private frmComp: SiteSuccessAndFailMessagesComponent) {
>>>>>>> master
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'YYYY/MM/DD'
    });
  }

  ngOnInit() {

<<<<<<< HEAD
=======
    //default date range
    /*
>>>>>>> master
    var d = new Date();
    d.setDate(d.getDate() - 7);
    this.fromDate = d;
    this.toDate = new Date();
<<<<<<< HEAD

    var date = new Date();

    for (var a = 0; a < 7; a++) {
      date.setDate(date.getDate() - 1);
      this.dataService.addDate(this.datePipe.transform(date,"yyyy-MM-dd").toString());
      // console.log(this.datePipe.transform(date,"yyyy-MM-dd"));
    }
=======
    */
    this.setdateRange();
>>>>>>> master

  }

  public setdateRange() {
    this.http.get('http://localhost:3000/api/getDate').subscribe(

      data => {
        this.fromDate = new Date(data[0]);
        this.toDate = new Date(data[1]);
      },

      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client side Error occured")
        } else {
          console.log("Server side Eror occured")
        }
      }
    );
  }



  public toDate;
  public fromDate;
  public messageType;

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

<<<<<<< HEAD
  user = { id: 1, name: 'Hello' };

=======
>>>>>>> master
  getData(inputForm: NgForm): void {

    console.log(inputForm.value)
    var region = inputForm.value.region;
    var marcketUnit = inputForm.value.marcketUnit;
    var fromDate = inputForm.value.fromDate;
    var toDate = inputForm.value.toDate;
    var messageType = inputForm.value.messageType;
    var siteCountry = inputForm.value.siteCountry;
    var siteId = inputForm.value.siteId;


    this.http.post('http://localhost:3000/api/inputControls?region=' + this.region + '&marcketUnit=' + this.marcketUnit + '&fromDate=' + this.fromDate + '&toDate=' + this.toDate + '&messageType=' + this.messageType + '&siteCountry=' + this.siteCountry + '&siteId=' + this.siteId, null)
<<<<<<< HEAD
      .subscribe(data => {
        console.log(data);
      });
  }


=======
      .subscribe(data => { });


      //window.location.reload();
      this.frmComp.getData();
    

  }

>>>>>>> master
}
