import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import "rxjs";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  private root = "https://flowdeck.be/datasrc";

  constructor(private http: HttpClient) { }

  create(contact: Contact){
    return this.http.post(this.root + "/contacten", contact)
    .subscribe();
  }

  update(contact: Contact){
    return this.http.delete(this.root + "/contacten/" + contact.id)
  }

  delete(contact: Contact){
    return this.http.put(this.root + "/contacten/" + contact.id , contact)
  }

  getContacten(){
    return this.http.get(this.root + "/contacten");
  }

  getContact(contact: Contact){
    return this.http.get(this.root + "/contacten/" + contact.id)
  }

}
