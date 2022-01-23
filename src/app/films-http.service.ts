import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {Film} from "./Film";
import {Show} from "./Show";

@Injectable({
  providedIn: 'root'
})
export class FilmsHttpService {

  url = 'http://localhost:7777'
  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(this.url + '/films').pipe(map((films: Film[]) =>
      films.map(film => {
        return new Film(film.filmId, film.title, film.image, film.smallImage, film.releaseDate, film.runtimeStr, film.plot, film.awards, film.directors, film.rating);
      })));
  }

  getShows(): Observable<Show[]>{
    return this.http.get<Show[]>(this.url + '/shows').pipe(map((shows: Show[]) =>
      shows.map(show => {
        return new Show(show.showId, show.filmId, show.date, show.hours, show.roomId, show.soldTickets);
      })));
  }
}
