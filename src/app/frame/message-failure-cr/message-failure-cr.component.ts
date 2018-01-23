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

  }

  public getData(): void {
      //const that = this;
      this.http.get('http://www.mocky.io/v2/5a5339103000009b181ebe53').subscribe(

          data => {
              console.log(data);
              
              this.lineChartData = data[0].datasets;
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
      { data: [], label: 'undefined' }
  ];

  //public lineChartData: any = [{ },{ },{ },{ },{ }];

  public lineChartType: string = 'line';

  public lineChartLabels: Array<any> = ["2018-01-16","2018-01-18","2018-01-20","2018-01-22"];    

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
