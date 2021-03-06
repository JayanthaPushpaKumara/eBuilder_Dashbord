import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WipComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getData();
    this.getDateRange();
  }

  public getData(): void {
    this.http.get('http://localhost:3000/api/wip').subscribe(
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
  }

  public getDateRange():void{
    this.http.get('http://localhost:3000/api/wip').subscribe(
      data => {
         console.log(data[0].dateRange);
         this.lineChartLabels=data[0].dateRange;
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

  public lineChartData: any = [{},{},{}];


  public lineChartType: string = 'line';

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
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
        boxWidth: 30,
        fontColor: "#FFFFFF"
      },
      position: 'bottom',
      fullWidth: true
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    }

  };

  public lineChartColors: Array<any> = [
    { // red
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'yellow',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = true;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
