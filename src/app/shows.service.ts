import { Injectable } from '@angular/core';
import {Show} from "./Show";
import {FilmsHttpService} from "./films-http.service";
import {Observable, of} from "rxjs";
import {Film} from "./Film";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  shows: Show[];
  films: Film[];
  showFilmMap: Map<string, string> = new Map<string, string>();

  public getShows(): Observable<Show[]> {
    // this.getFilms();
    return of(this.shows);
  }

  public getFilms(): Observable<Film[]> {
    return of(this.films);
  }

  constructor(private http: FilmsHttpService) {
    this.films = []
    this.shows = []
    this.http.getFilms().subscribe(list => {
      this.films = list;
    });

    this.http.getShows().subscribe(list => {
      this.shows = list;
      this.shows.forEach(show => {
        show.film = this.films.find(film => film.filmId === show.filmId)
      })
    })
  }

  addShow(show: Show){

    this.http.addShow(show).subscribe(show => this.shows.push(show));
    // this.shows = this.shows.sort((a, b) => a.title > b.title? 1 : -1);
  }

  editShow(show: Show, selected: Show) {
    this.shows.forEach((obj, index, tab) => {
      if (obj === selected) {
        tab[index] = show;
      }
    });
    // this.shows = this.shows.sort((a, b) => a.title > b.title? 1 : -1);
  }

  deleteShow(show: Show) {
    this.shows = this.shows.filter(obj => obj !== show);
    // this.shows = this.shows.sort((a, b) => a.title > b.title? 1 : -1);
  }










}
