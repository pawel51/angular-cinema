import {Component, OnInit} from '@angular/core';
import {Film} from '../Film'
import {Films} from '../films-moc'
import {MatDialog} from "@angular/material/dialog";
import {AddFilmComponent} from "../add-film/add-film.component";

@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css']
})
export class FilmsComponentComponent implements OnInit {

  filmsList = Films;
  headers: string[] = []
  selectedFilm: Film | null = null;
  newFilm: Film | null = null;

  constructor(public dialog: MatDialog) {
    this.filmsList.forEach(el => {
      const keys = Object.keys(el)
      keys.forEach(key => {
        if (!this.headers.includes(key)) {
          this.headers.push(key);
        }
      })
    })

  }

  ngOnInit(): void {
  }

  onSelect(note: Film): void {
    this.selectedFilm = note;
  }

  openDialog(): void {
    let dialogRef = null;
    dialogRef = this.dialog.open(AddFilmComponent, {
      width: '30%',
      data: {title: '', filmId: ''}
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.title.length === 0 || result.filmId < 0) {
          result.title = "film bez tytułu"
          result.filmId = "9999"
        }
        this.newFilm = new Film(result.filmId, result.title);
        this.filmsList.push(this.newFilm);
      }
    })
  }

  deleteFilm(): void {
    this.filmsList = this.filmsList.filter(obj => obj !== this.selectedFilm);

  }


  changeStatus(): void {
    if (this.selectedFilm !== null)
      this.selectedFilm.status = !this.selectedFilm.status;
  }


}
