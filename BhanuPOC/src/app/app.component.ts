import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public searchFor = "";
  public hospitalList = [];
  public selectedHospital = "";
  public selectedHospitalInfo = {};

  constructor(private http: Http){ }
  
  public getSearchResults(){
    console.log("inside getSearchResults : "+ this.searchFor);
    let reqArg = {
      params : { "key" : this.searchFor}
    };

    this.http.get('/gethospitaldata', reqArg).map((res: Response) => {
      let response = res.json();
      return response;
    }).catch((error: any) => {
      console.log(error);
      return Observable.throw(error.text() || 'Server error');
    }).subscribe((res)=>{
      this.hospitalList = res;
      this.selectedHospital = this.hospitalList[0].name;
      this.selectedHospitalInfo = this.hospitalList[0];
      console.log(JSON.stringify(this.hospitalList));
    })
  }

  public getHospitalData(hospitalId){
    console.log(hospitalId);
  }
}
