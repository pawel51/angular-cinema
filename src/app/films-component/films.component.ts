import {Component, OnInit} from '@angular/core';
import {Film} from '../Film'
import {Films} from '../films-moc'
import {MatDialog} from "@angular/material/dialog";
import {AddFilmComponent} from "../add-film/add-film.component";
import {EditFilmComponent} from "../edit-film/edit-film.component";
import {FilmsService} from "../films.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-films-component',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList = Films;
  headers: string[] = []
  selectedFilm: Film;
  private newFilm: Film;
  date: string | null = null;
  private selected: boolean = false;

  constructor(public dialog: MatDialog, private films: FilmsService, private route: ActivatedRoute) {
    this.filmsList.forEach(el => {
      const keys = Object.keys(el)
      keys.forEach(key => {
        if (!this.headers.includes(key)) {
          this.headers.push(key);
        }
      })
    })
    this.newFilm = new Film("", "");
    this.selectedFilm = new Film("", "");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.date = params.get('date'));
    this.films.getFilms().subscribe(list => {
      this.filmsList = list
    });
    this.headers = this.films.getHeaders();
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  openDialog(add: boolean, edit: boolean): void {
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddFilmComponent, {
        width: '30%',
        data: {title: '', filmId: ''}
      })
    } else if (edit) {
      dialogRef = this.dialog.open(EditFilmComponent, {
        width: '30%',
        data: this.selectedFilm
      })
    } else
      return;

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.title.length === 0 || result.filmId < 0) {
          result.title = "film bez tytułu"
          result.filmId = "9999"
        }
        this.newFilm = new Film(result.filmId, result.title);

        if(add){
          this.films.addFilm(this.newFilm);
        }
        else if(edit){
          this.filmsList.forEach((obj, index, tab) =>{
            if(obj === this.selectedFilm){
              tab[index] = this.selectedFilm;
              this.films.editFilm(this.newFilm, this.selectedFilm);
              this.selectedFilm = tab[index];
            }
          })
        }

      }
    })
  }

  deleteFilm(): void {
    console.log("delete");
    this.filmsList = this.filmsList.filter(obj => obj !== this.selectedFilm);
    this.films.deleteFilm(this.selectedFilm);
    this.selectedFilm = new Film("", "");
    this.selected = false;
  }


  changeStatus(): void {
    if (this.selectedFilm !== null)
      this.selectedFilm.status = !this.selectedFilm.status;
  }


}
