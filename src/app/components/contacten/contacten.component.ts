import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contacten',
  templateUrl: './contacten.component.html',
  styleUrls: ['./contacten.component.css']
})
export class ContactenComponent implements OnInit {

  contacten: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getContacten().subscribe((contacten)=>{
      this.contacten = contacten;
    })

  }

}
