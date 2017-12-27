import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    data: any;
    options: any;

    constructor() {

        this.data = {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "Dataset 1",
                    fill: false,
                    lineTension: 0.4,
                    pointHoverBackgroundColor: "blue",
                    pointHoverBorderColor: "red",
                    pointHoverBorderWidth: 2,
                    borderColor: 'rgb(255, 99, 132)',
                    data: [100, 45, 40, 20, 20],
                    padding:40,
                },
                {
                    label: "Dataset 2",
                    borderColor: 'green',
                    fill: false,
                    lineTension: .4,
                    pointHoverBackgroundColor: "blue",
                    pointHoverBorderColor: "red",
                    pointHoverBorderWidth: 2,
                    data: [34, 56, 50, 80, 40],
                    padding:40,
                },
                {
                    label: "Dataset 3",
                    borderColor: 'blue',
                    fill: false,
                    lineTension: .4,
                    pointHoverBackgroundColor: "blue",
                    pointHoverBorderColor: "red",
                    pointHoverBorderWidth: 2,
                    data: [20, 35, 60, 40, 65],
                    padding:40,
                },
            ]
        };
        this.options= {
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
                    boxWidth:50,
                    fontColor: "#FFFFFF"
                },
                position:'bottom'
            }
        }

        
    

    }

    ngOnInit() {

    }

   

    
}

