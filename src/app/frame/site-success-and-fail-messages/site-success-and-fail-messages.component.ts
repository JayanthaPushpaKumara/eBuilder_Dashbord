import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-site-success-and-fail-messages',
    templateUrl: './site-success-and-fail-messages.component.html',
    styleUrls: ['./site-success-and-fail-messages.component.css']
})
export class SiteSuccessAndFailMessagesComponent {

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

    public lineChartLegend: boolean = true;

    public lineChartColors: Array<any> = [
        { // red
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
            fill: false,
        }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}
