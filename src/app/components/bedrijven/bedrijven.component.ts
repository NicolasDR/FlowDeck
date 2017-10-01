import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bedrijven',
  templateUrl: './bedrijven.component.html',
  styleUrls: ['./bedrijven.component.css']
})
export class BedrijvenComponent implements OnInit {

  bedrijven: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getBedrijven().subscribe((bedrijven)=>{
      this.bedrijven = bedrijven;
    })

  }

}
