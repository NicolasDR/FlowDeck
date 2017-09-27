import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Factuur } from '../../models/factuur';

@Component({
  selector: 'app-facturen',
  templateUrl: './facturen.component.html',
  styleUrls: ['./facturen.component.css']
})
export class FacturenComponent implements OnInit {

  facturen: any;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getFacturen().subscribe((facturen)=>{
      console.log(facturen);
      this.facturen = facturen;
    })

  }

}
