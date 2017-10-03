import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BedrijvenComponent } from './components/bedrijven/bedrijven.component';
import { FacturenComponent } from './components/facturen/facturen.component';

import { DataService } from './services/data.service';

import { ContactService } from './components/contact/contact.service';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactNewComponent } from './components/contact/contact-new/contact-new.component';

const appRoutes: Routes = [
  { path: 'bedrijven', component: BedrijvenComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'facturen', component: FacturenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BedrijvenComponent,
    FacturenComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
