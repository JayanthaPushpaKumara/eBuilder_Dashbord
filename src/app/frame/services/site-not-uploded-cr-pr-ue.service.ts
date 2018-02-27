import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SiteNotUplodedCrPrUe } from '../models/siteNotUplodedCrPrUe.model';


@Injectable()
export class SiteNotUplodedCrPrUeService {

  private serviceUrl = 'http://localhost:3000/api/snu_CrPrUe';

  constructor(private http: HttpClient) { }

  getSiteNotUplodedCrPrUe(): Observable<SiteNotUplodedCrPrUe[]> {
    return this.http.get<SiteNotUplodedCrPrUe[]>(this.serviceUrl);
  }


}