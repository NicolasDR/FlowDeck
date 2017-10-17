import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import "rxjs";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  private root = "https://flowdeck.be/datasrc";
  public _contacten = new BehaviorSubject(null);
  public _contact = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  create(contact: Contact){
    this.http.post(this.root + "/contacten", contact).subscribe(res => {
      this.getContacten();
    });
  }

  update(contact: Contact){
    this.http.delete(this.root + "/contacten/" + contact.id)
  }

  delete(contact: Contact){
    this.http.delete(this.root + "/contacten/" + contact.id).subscribe(res => {
      this.getContacten();
    });
  }

  getContacten(){

    this.http.get(this.root + "/contacten/").subscribe( contacten => {
      this._contacten.next(contacten);
    });

  }

  getContact(id: any){
    this.http.get(this.root + "/contacten/" + id).subscribe( contact => {
      this._contact.next(contact[0]);
    });
  }

  set contacten(value:any) {
    this._contacten = value;
  }

  get contacten():any {
    return this._contacten;
  }

  set contact(value:any) {
    this._contact = value;
  }

  get contact():any {
    return this._contact;
  }

}
