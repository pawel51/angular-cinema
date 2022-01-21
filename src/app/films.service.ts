import { Injectable } from '@angular/core';
import {Film} from "./Film";
import {FilmsHttpService} from "./films-http.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {



  _films: Film[];
  headers: string[] = [];

  constructor(private http: FilmsHttpService) {
    this._films = []
    this.http.getFilms().subscribe(list => {
      this._films = list;
      this._films.forEach(el => {
        const keys = Object.keys(el);
        keys.forEach(key => {
          if (!this.headers.includes(key)) {
            if (key !== 'amount') {
              this.headers.push(key);
            }
          }
        });
      });
    })
  }

  getFilms(): Observable<Film[]>{
    return of(this._films);
  }

  getHeaders(): string[] {
    return this.headers;
  }

  addFilm(film: Film) {
    this._films.push(film);
    this._films = this._films.sort((a, b) => a.title > b.title? 1 : -1);
  }

  editFilm(film: Film, selected: Film) {
    this._films.forEach((obj, index, tab) => {
      if (obj === selected) {
        tab[index] = film;
      }
    });
    this._films = this._films.sort((a, b) => a.title > b.title? 1 : -1);
  }

  deleteFilm(film: Film) {
    this._films = this._films.filter(obj => obj !== film);
    this._films = this._films.sort((a, b) => a.title > b.title? 1 : -1);
  }


}
