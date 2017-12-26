import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data: any;
  options: any;

  constructor() {

    this.data = {
      labels: ["Africa", "Asia", "Europe", "America"],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
        data: [2478, 734, 784, 433]
      }]
    },
      this.options = {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        },
        legend: {
          display: true,
          labels: {
              fontColor: "Black"
          },
          position:'bottom'
      }
      }
  }


ngOnInit() {
}

}
