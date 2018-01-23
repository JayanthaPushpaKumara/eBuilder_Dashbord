import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WipComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        labels: ["1850", "1900", "1950", "1999", "2050"],
        datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [100, 150, 300, 600, 700],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [250, 400, 500, 675, 800],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "#706EFF",
          data: [100, 150, 300, 600, 700]
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "#4DFFEF",
          backgroundColorHover: "#3e95cd",
          data: [250, 400, 500, 675, 800]
        }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Population growth (millions): Europe & Africa'
        },

        scales: {
          yAxes: [{
            ticks: {
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
            tension: 0.3, // disables bezier curves
          }
        }
      }
    });
  }

}
