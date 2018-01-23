import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-message-failure-pr-ue',
  templateUrl: './message-failure-pr-ue.component.html',
  styleUrls: ['./message-failure-pr-ue.component.css']
})
export class MessageFailurePrUeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    new Chart(document.getElementById("line-chart2"), {
      type: 'line',
      data: {
        labels: ["2018-01-16","2018-01-18","2018-01-20","2018-01-22"],
        datasets: [{
          data: [57,57,58,122],
          label: "PR FAILURE",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [14,100],
          label: "PR TOTAL",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [3,3,3,3],
          label: "UE FAILURE",
          borderColor: "orange",
          fill: false
        }, {
          data: [5,3],
          label: "UE TOTAL",
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
            tension: 0, // disables bezier curves
          }
        }
      }
    });

  }

}
