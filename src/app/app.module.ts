import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { FrameComponent } from './frame/frame.component';
import { LineChartComponent } from './frame/line-chart/line-chart.component';
import { PieChartComponent } from './frame/pie-chart/pie-chart.component';

import { TableComponent } from './frame/table/table.component';
import { Pagination}   from './frame/table/app.paginationComponent';
import { MixedChartComponent } from './frame/mixed-chart/mixed-chart.component';
import { LineChart2Component } from './frame/line-chart2/line-chart2.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BannerComponent,
    FrameComponent,
    LineChartComponent,
    PieChartComponent,    
    TableComponent,
    Pagination,
    MixedChartComponent,
    LineChart2Component
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,Pagination]
})
export class AppModule { }