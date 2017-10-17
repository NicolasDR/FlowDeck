import { Component, OnInit} from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacten: any;
  activePane;
  contactDetails: any;
  isEdit: any;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {

  }

  onEditClick(contact){
    this.activePane = 'open';
    this.isEdit = true;
    this.contactService.getContact(contact.id);
    this.contactService.contact.subscribe(contact => {
      this.contactDetails = contact;
    })
  }


}
