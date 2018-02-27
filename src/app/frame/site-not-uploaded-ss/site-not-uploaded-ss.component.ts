import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../models/user.model';

@Component({
  selector: 'app-site-not-uploaded-ss',
  templateUrl: './site-not-uploaded-ss.component.html',
  styleUrls: ['./site-not-uploaded-ss.component.css']
})

export class SiteNotUploadedSsComponent {

    displayedColumns = ['SITEID', 'LASTMSGDATE']
    dataSource = new UserDataSource(this.userService);

    constructor(private userService: UserService) { }
 
}

export class UserDataSource extends DataSource<any>{
    constructor(private userService: UserService) {
      super();
    }
  
    connect(): Observable<User[]> {
      return this.userService.getUser();
    }
  
    disconnect() { }
  }
