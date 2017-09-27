import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Factuur } from '../models/factuur';

@Injectable()
export class DataService {


  constructor(public http: HttpClient) {
    console.log("data service connected...");
  }

  getFacturen(){
    return this.http.get('https://flowdeck.be/datasrc/facturen.php');
  }

}
