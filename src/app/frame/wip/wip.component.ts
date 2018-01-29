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
  }

  public getData(): void {
    this.http.get('http://www.mocky.io/v2/5a6ecc5230000003116fe31b').subscribe(
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

  public lineChartData: any = [{ },{ },{ }];


  public lineChartType: string = 'line';

  public lineChartLabels: Array<any> = ["2018-01-22","2018-01-23","2018-01-24","2018-01-25","2018-01-26"];
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
