import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacten: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacten();
  }

  getContacten(){
    this.contactService.getContacten()
    .subscribe((contacten)=>{
      this.contacten = contacten;
    });
  }

  deleteContact(c){
    this.contactService.delete(c).subscribe(res=> {
      this.getContacten();  // this is function who makes GET request
    });
  }

}
