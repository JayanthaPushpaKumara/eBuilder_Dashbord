import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DataService } from './data.service';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { FrameComponent } from './frame/frame.component';

import { DataTableModule } from 'angular5-data-table';

import { ChartsModule } from 'ng2-charts';

import { SiteSuccessAndFailMessagesComponent } from './frame/site-success-and-fail-messages/site-success-and-fail-messages.component';
import { MessageFailureCrComponent } from './frame/message-failure-cr/message-failure-cr.component';
import { MessageFailurePrUeComponent } from './frame/message-failure-pr-ue/message-failure-pr-ue.component';
import { WipComponent } from './frame/wip/wip.component';
import { SiteNotUploadedSsComponent } from './frame/site-not-uploaded-ss/site-not-uploaded-ss.component';
import { SiteNotUploadedCrPrUeComponent } from './frame/site-not-uploaded-cr-pr-ue/site-not-uploaded-cr-pr-ue.component';

import { DataTableDemo4 } from './frame/demo4/data-table-demo4';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BannerComponent,
    FrameComponent,
    
    SiteSuccessAndFailMessagesComponent,
    MessageFailureCrComponent,
    MessageFailurePrUeComponent,
    WipComponent,
    SiteNotUploadedSsComponent,
    SiteNotUploadedCrPrUeComponent,
    DataTableDemo4
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    AppRoutingModule, 
    DataTableModule,
    BsDatepickerModule.forRoot()  
    
  ],
  providers: [DataService,DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }