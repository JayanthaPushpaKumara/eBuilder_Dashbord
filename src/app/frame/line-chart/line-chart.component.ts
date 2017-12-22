import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
    type = 'line';
    data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    options = {
        responsive: true,
        maintainAspectRatio: false
    };

}

