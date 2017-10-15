import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacten: any;
  @ViewChild('sampleT') public sampleT: TemplateRef<any>;
  @ViewChild('sampleT2') public sampleT2: TemplateRef<any>;
  _editContact: any;

  rowCount = 0;
  rows = [];
  columns = [
    { width: 80, canAutoResize: false, sortable: false, draggable: false, resizeable: false, cellTemplate: this.sampleT2},
    { prop: 'name', name: 'Naam' , width: 150},
    { prop: 'address', name: 'Adres' , width: 200 },
    { prop: 'email', name: 'E-mail', width: 250 },
    { prop: 'phone', name: 'Telefoon' , width: 125},
    { prop: 'iban', name: 'IBAN' },
    { name: 'Acties', cellTemplate: this.sampleT }
  ];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getContacten();

    this.columns = [
      { width: 80, canAutoResize: false, sortable: false, draggable: false, resizeable: false, cellTemplate: this.sampleT2},
      { prop: 'name', name: 'Naam' , width: 150},
      { prop: 'address', name: 'Adres' , width: 200 },
      { prop: 'email', name: 'E-mail', width: 250 },
      { prop: 'phone', name: 'Telefoon' , width: 125},
      { prop: 'iban', name: 'IBAN' },
      { name: 'Acties', cellTemplate: this.sampleT }
    ];
  }


  getContacten(){
    this.contactService.getContacten();
    this.contactService.contacten.subscribe(contacten => {
      this.contacten = contacten;
      this.rows = contacten;
    })
  }

  editContact(c){

  }

  deleteContact(c){
    this.contactService.delete(c);
  }


}
