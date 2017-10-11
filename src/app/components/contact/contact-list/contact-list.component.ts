import { Component, OnInit, ViewChild} from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  rowCount = 0;
  rows = [];
  columns = [
    { width: 50, canAutoResize: false, sortable: false, draggable: false, resizeable: false, headerCheckboxable: true, checkboxable: true},
    { prop: 'name', name: 'Naam' , width: 250},
    { prop: 'address', name: 'Adres' , width: 250 },
    { prop: 'email', name: 'E-mail', width: 250 },
    { prop: 'phone', name: 'Telefoon' },
    { name: 'Website' },
    { name: 'Acties' }
  ];

  contacten: any;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getContacten();
  }


  getContacten(){
    this.contactService.getContacten();
    this.contactService.contacten.subscribe(contacten => {
      this.contacten = contacten;
      this.rows = contacten;
    })
  }

  deleteContact(c){
    this.contactService.delete(c);
  }


}
