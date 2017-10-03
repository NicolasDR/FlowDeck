import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Factuur } from '../models/factuur';

@Injectable()
export class DataService {


  constructor(public http: HttpClient) {}

  getFacturen(){
    return this.http.get('https://flowdeck.be/datasrc/facturen.php');
  }

  getContacten(){
    return this.http.get('https://flowdeck.be/datasrc/contacten.php');
  }

  getBedrijven(){
    return this.http.get('https://flowdeck.be/datasrc/bedrijven.php');
  }

  insertContact(c){
    this.http.post('https://flowdeck.be/datasrc/insert_contact.php', c);
  }

}
