import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FilmsComponent} from "./films-component/films.component";
import {HomeComponent} from "./home/home.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ShowsComponent} from "./shows/shows.component";

const routes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'allFilms', component: FilmsComponent},
  { path: 'allShows', component: ShowsComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: 'dayFilms/:date', component: ShowsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
