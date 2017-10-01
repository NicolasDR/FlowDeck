import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactenComponent } from './components/contacten/contacten.component';
import { BedrijvenComponent } from './components/bedrijven/bedrijven.component';
import { FacturenComponent } from './components/facturen/facturen.component';

import { DataService } from './services/data.service';
import { ActionsComponent } from './components/actions/actions.component';

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
    FacturenComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
