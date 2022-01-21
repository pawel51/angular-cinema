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
    this.getFilms();
    return of(this.shows);
  }

  public getFilms(): Observable<Film[]> {
    return of(this.films);
  }

  constructor(private http: FilmsHttpService) {
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
}
