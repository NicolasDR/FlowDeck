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
  isVisible;

  constructor(private contactService: ContactService) {

    this.isVisible = 'closed';

  }

  ngOnInit() {

  }

  change(){
    this.isVisible = 'open';
  }


}
