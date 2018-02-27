import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-message-failure-cr',
  templateUrl: './message-failure-cr.component.html',
  styleUrls: ['./message-failure-cr.component.css']
})
export class MessageFailureCrComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    //this.createChart();
    this.getData();
<<<<<<< HEAD
=======
    this.getDateRange();
>>>>>>> master

  }

  public getData(): void {
    //const that = this;
    //this.http.get('http://www.mocky.io/v2/5a69cbb82e000096207a75eb').subscribe(      
    this.http.get('http://localhost:3000/api/Msg_F_Acc_CR').subscribe(

      data => {
<<<<<<< HEAD
        console.log(data);
        this.lineChartData = data;
=======
        console.log(data[1]);
        this.lineChartData = data[1];
>>>>>>> master
      },

      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client side Error occured")
        } else {
          console.log("Server side Eror occured")
        }
      }
    );
<<<<<<< HEAD
=======
  }

  public getDateRange():void{
    this.http.get('http://localhost:3000/api/Msg_F_Acc_CR').subscribe(
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
>>>>>>> master
  }


  public lineChartData: any = [{}, {}];


  public lineChartType: string = 'line';

<<<<<<< HEAD
  public lineChartLabels: Array<any> = ["2018-01-16", "2018-01-17", "2018-01-18", "2018-01-19", "2018-01-20"];
=======
  public lineChartLabels: Array<any> = [];
>>>>>>> master
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
      borderColor: 'red',
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
