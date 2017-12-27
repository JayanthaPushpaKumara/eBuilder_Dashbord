import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


    constructor() { }


    ngOnInit() {

        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
              labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133,221,783,2478],
                  label: "Africa",
                  borderColor: "#3e95cd",
                  fill: false
                }, { 
                  data: [282,350,411,502,635,809,947,1402,3700,5267],
                  label: "Asia",
                  borderColor: "#8e5ea2",
                  fill: false
                }, { 
                  data: [168,170,178,190,203,276,408,547,675,734],
                  label: "Europe",
                  borderColor: "#3cba9f",
                  fill: false
                }, { 
                  data: [40,20,10,16,24,38,74,167,508,784],
                  label: "Latin America",
                  borderColor: "#e8c3b9",
                  fill: false
                }
              ]
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
                    boxWidth: 20,
                    fontColor: "#FFFFFF",
                    padding:20
                },
                position: 'bottom',
                fullWidth:true
            }
            }
          });

    }
}

