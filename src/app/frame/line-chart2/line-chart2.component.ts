import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {

  constructor() { }

  ngOnInit() {



    new Chart(document.getElementById("line-chart2"), {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
        datasets: [{
          data: [1,8,5,2,4,5,8,9],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [5,6,2,4,7,8,9,3],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [7,5,6,3,9,8,8,4],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }]
      },
      options: {
        title: {
          display: false,
          text: 'World population per region (in millions)'
        },
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
            tension: .3, // disables bezier curves
          }
        }
      }
    });



  }

}
