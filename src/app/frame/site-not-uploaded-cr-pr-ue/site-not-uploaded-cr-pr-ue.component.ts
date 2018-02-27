import { Component } from '@angular/core';
import { SiteNotUplodedCrPrUeService } from '../services/site-not-uploded-cr-pr-ue.service'
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { SiteNotUplodedCrPrUe } from '../models/siteNotUplodedCrPrUe.model';

@Component({
  selector: 'app-site-not-uploaded-cr-pr-ue',
  templateUrl: './site-not-uploaded-cr-pr-ue.component.html',
  styleUrls: ['./site-not-uploaded-cr-pr-ue.component.css']
})
export class SiteNotUploadedCrPrUeComponent {

  displayedColumns = ['SITEID', 'MSESAGETYPE', 'LASTMSGDATE']
  dataSource = new SnuCrPrUeDataSource(this.snuCrPrUeService);

  constructor(private snuCrPrUeService: SiteNotUplodedCrPrUeService) { }

  ngOnInit() {
  }

}
export class SnuCrPrUeDataSource extends DataSource<any>{
  constructor(private snuCrPrUeService: SiteNotUplodedCrPrUeService) {
    super();
  }

  connect(): Observable<SiteNotUplodedCrPrUe[]> {
    return this.snuCrPrUeService.getSiteNotUplodedCrPrUe();
  }

  disconnect() { }
}