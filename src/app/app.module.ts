import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//import { ChartModule } from 'angular2-chartjs';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { FrameComponent } from './frame/frame.component';

import { LineChartComponent } from './frame/line-chart/line-chart.component';
import { LineChart2Component } from './frame/line-chart2/line-chart2.component';
import { PieChartComponent } from './frame/pie-chart/pie-chart.component';
import { MixedChartComponent } from './frame/mixed-chart/mixed-chart.component';
import { TestComponent } from './frame/test/test.component';
import { TableComponent } from './frame/table/table.component';
import { Pagination}   from './frame/table/app.paginationComponent';

import { ChartsModule } from 'ng2-charts';



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
    LineChart2Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],

  bootstrap: [AppComponent,Pagination]
})
export class AppModule { }