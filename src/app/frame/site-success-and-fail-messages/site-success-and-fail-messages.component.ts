import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../data.service';
<<<<<<< HEAD

@Component({
=======
import { DatePipe } from '@angular/common';

@Component({

>>>>>>> master
    selector: 'app-site-success-and-fail-messages',
    templateUrl: './site-success-and-fail-messages.component.html',
    styleUrls: ['./site-success-and-fail-messages.component.css']
})
export class SiteSuccessAndFailMessagesComponent {

<<<<<<< HEAD
    constructor(private http: HttpClient,private dataService:DataService) {

    }

    ngOnInit() {
        this.getData();
        this.getlineChartLabel();
        
    }

    public getData(): void {
        //const that = this;
        //this.http.get('http://www.mocky.io/v2/5a69bcb82e000037197a7589').subscribe(
        this.http.get('http://localhost:3000/api/SiteSuccess&FailMsg').subscribe(

            data => {
                console.log(data);
                this.lineChartData = data;
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

    public getlineChartLabel(){
        
        var data =  this.dataService.getDateArray();
        data.reverse();
        console.log(data);
        this.lineChartLabels = data;
        
    }

    public lineChartData: any = [
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' }
    ];

    //public lineChartData: any = [{ },{ },{ },{ },{ }];

    public lineChartType: string = 'line';

    

    public lineChartLabels: Array<any> = [];

    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#FFFFFF"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#FFFFFF"
                }
            }]
        },
        legend: {
            labels: {
                boxWidth: 10,
                fontSize: 7,
                fontColor: "#FFFFFF"
            },
            position: 'bottom',
            fullWidth: true
        },
        elements: {
            line: {
                tension: .1, // disables bezier curves
            }
        }

    };

=======
    constructor(private http: HttpClient, private dataService: DataService, private datePipe: DatePipe) { }

    ngOnInit() {
        this.getData();
    }

    public getData(): void {

        //this.http.get('http://www.mocky.io/v2/5a69bcb82e000037197a7589').subscribe(
        this.http.get('http://localhost:3000/api/SiteSuccess&FailMsg2').subscribe(

            data => {
                console.log(data[1]);
                this.lineChartData = data[1];
            },

            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client side Error occured")
                } else {
                    console.log("Server side Eror occured")
                }
            }
        );

        //this.getlineChartLabelfromnode();
        
        this.getDateRange();

    }


    public getDateRange(): void {

        this.http.get('http://localhost:3000/api/SiteSuccess&FailMsg2').subscribe(
          data => {
            console.log(data[0].dateRange);
            this.lineChartLabels = data[0].dateRange;
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

    public lineChartData: any = [
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' },
        { data: [], label: 'undefined' }
    ];

    

    public lineChartType: string = 'line';

    public lineChartLabels: Array<any> = [];

    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#FFFFFF"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#FFFFFF"
                }
            }]
        },
        legend: {
            labels: {
                boxWidth: 10,
                fontSize: 7,
                fontColor: "#FFFFFF"
            },
            position: 'bottom',
            fullWidth: true
        },
        elements: {
            line: {
                tension: .1, // disables bezier curves
            }
        }

    };

>>>>>>> master
    public lineChartLegend: boolean = true;

    public lineChartColors: Array<any> = [
        { // red
<<<<<<< HEAD
            borderColor: '#FF5E5E',
            fill: false,
        },
        { // green
            borderColor: '#F5FF5E',
            fill: false,
        },
        { // red
            borderColor: '#6FFF3A',
            fill: false,
        },
        { // green
            borderColor: '#3AFFE4',
            fill: false,
        },
        { // blue
            borderColor: '#3A4BFF',
            fill: false,
        },
        { // green
            borderColor: '#F5FF5E',
            fill: false,
        },
        { // red
            borderColor: '#6FFF3A',
            fill: false,
        },
        { // green
            borderColor: '#3AFFE4',
            fill: false,
        },
        { // blue
            borderColor: '#3A4BFF',
            fill: false,
        },
        { // green
            borderColor: '#F5FF5E',
            fill: false,
        },
        { // red
            borderColor: '#6FFF3A',
=======
            borderColor: '#641E16',
            fill: false,
        },
        { // green
            borderColor: '#9B59B6',
            fill: false,
        },
        { // red
            borderColor: '#21618C',
            fill: false,
        },
        { // green
            borderColor: '#48C9B0',
            fill: false,
        },
        { // blue
            borderColor: '#F1C40F',
            fill: false,
        },
        { // green
            borderColor: '#A04000',
            fill: false,
        },
        { // red
            borderColor: '#E74C3C',
            fill: false,
        },
        { // green
            borderColor: '#4DFE05',
            fill: false,
        },
        { // blue
            borderColor: '#FE0505',
            fill: false,
        },
        { // green
            borderColor: '#00F3FF',
            fill: false,
        },
        { // red
            borderColor: '#FF00F0',
>>>>>>> master
            fill: false,
        }
    ];

<<<<<<< HEAD
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
=======

    public chartClicked(): void {
        
    }


    // public getlineChartLabelfromnode() {
    //     this.http.get('http://localhost:3000/api/getDate').subscribe(

    //         data => {
    //             var date1 = new Date(data[0]);
    //             var date2 = new Date(data[1]);

    //             this.dataService.date.length = 0;
    //             date2.setDate(date2.getDate() + 1);

    //             do {
    //                 this.dataService.addDate(this.datePipe.transform(date1, "yyyy-MM-dd").toString());
    //                 date1.setDate(date1.getDate() + 1);

    //             } while (date1.toString() != date2.toString());
    //         },

    //         (err: HttpErrorResponse) => {
    //             if (err.error instanceof Error) {
    //                 console.log("Client side Error occured")
    //             } else {
    //                 console.log("Server side Eror occured")
    //             }
    //         }
    //     );

    //     var label = this.dataService.getDateArray();
    //     this.lineChartLabels = label;
    // }


>>>>>>> master

}
