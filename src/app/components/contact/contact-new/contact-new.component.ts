import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contacten: any;
  @Input('edit') isEdit: any = false;
  @Input('editContact') _editContact: any = {
    id: 0,
    name: "test",
    firstName: "test",
    street: "test",
    houseNumber: "test",
    country: "test",
    province: "test",
    website: "test",
    fax: "test",
    phone: "test",
    iban: "test",
    postalCode: "test"
  };
  testerino: any = {
    name: 'testerino'
  };


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    console.log(this.testerino);
  }

  getContacten(){
    this.contactService.getContacten();
    this.contacten = this.contactService._contacten;
  }

  getContact(id){
    this.contactService.getContact(id);
    this._editContact = this.contactService._contact;
  }

  contactToevoegen(form: any){
    var firstName = form.value.firstName;
    var name = form.value.name;
    var email = form.value.email;
    var phone = form.value.phone;
    var fax = form.value.fax;
    var website = form.value.website;
    var iban = form.value.iban;
    var bic = form.value.bic;
    var street = form.value.street;
    var houseNumber = form.value.houseNumber;
    var province = form.value.province;
    var postalCode = form.value.postalCode;
    var city = form.value.city;
    var country = form.value.country;

    var contact = new Contact(
      undefined,firstName,name,street,houseNumber,province,postalCode,city,country,email,phone,fax,website,iban,bic
    );

    this.contactService.create(contact);
    this.contactService.getContacten();
    this.contacten = this.contactService._contacten;
  };

  ngOnChanges() {
    if(this._editContact != null){
      console.log(this._editContact);
    }
  }

}
