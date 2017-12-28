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
                labels: [1850, 1900, 1950, 2000, 2050],
                datasets: [{
                    data: [13, 22, 30, 40, 50],
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [47, 14, 37, 67, 80],
                    label: "Asia",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [40, 47, 50, 60, 100],
                    label: "Europe",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: [74, 67, 75, 84, 90],
                    label: "Latin America",
                    borderColor: "#e8c3b9",
                    fill: false
                }, {
                    data: [10, 60, 50, 70, 85],
                    label: "North America",
                    borderColor: "#c45850",
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

