import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { AppComponent } from './app.component';
import { ContactenComponent } from './components/contacten/contacten.component';
import { BedrijvenComponent } from './components/bedrijven/bedrijven.component';
import { FacturenComponent } from './components/facturen/facturen.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: 'bedrijven', component: BedrijvenComponent },
  { path: 'contacten', component: ContactenComponent },
  { path: 'facturen', component: FacturenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BedrijvenComponent,
    ContactenComponent,
    FacturenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DataTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
