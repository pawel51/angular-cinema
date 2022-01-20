import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../Film";

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {
  @Input() film: Film | undefined;
  @Output() changeFilmStatus: EventEmitter<void> = new EventEmitter();
  @Output() deleteFilm: EventEmitter<void> = new EventEmitter();
  @Output() editFilm: EventEmitter<void> = new EventEmitter();


  constructor() { }

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
