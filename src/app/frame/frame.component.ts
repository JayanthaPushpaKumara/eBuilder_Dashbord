import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
<<<<<<< HEAD
      this.getData();
=======
     // this.getData();
>>>>>>> master
  }

  public getData(): void {

      this.http.get('http://localhost:3000/api/loadInputControls').subscribe(

          data => {
              console.log(data);
          },

          (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                  console.log("Client side Error occured")
              } else {
                  console.log("Server side Eror occured")
              }
          }
      );

  }

}
