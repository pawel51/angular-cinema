import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film-component/film.component';
import { FilmsComponent } from './films-component/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ShowComponent } from './show/show.component';
import { ShowsComponent } from './shows/shows.component';
import { AddShowComponent } from './add-show/add-show.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmsComponent,
    AddFilmComponent,
    EditFilmComponent,
    HomeComponent,
    CalendarComponent,
    ShowComponent,
    ShowsComponent,
    AddShowComponent,
    EditShowComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule,
    AppRoutingModule,
    RouterModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
