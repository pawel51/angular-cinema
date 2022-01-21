import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../Film";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-film-component',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film: Film | undefined;
  @Output() changeFilmStatus: EventEmitter<void> = new EventEmitter();
  @Output() deleteFilm: EventEmitter<void> = new EventEmitter();
  @Output() editFilm: EventEmitter<void> = new EventEmitter();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    this.changeFilmStatus.emit();
  }

  deleteSelectedFilm(): void {
    this.deleteFilm.emit();
  }

  editSelectedFilm(): void {
    this.editFilm.emit();
  }

}
