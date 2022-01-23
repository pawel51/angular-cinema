import { Component, OnInit } from '@angular/core';
import {Show} from "../Show";
import {ShowsService} from "../shows.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Film} from "../Film";
import {EditShowComponent} from "../edit-show/edit-show.component";
import {AddShowComponent} from "../add-show/add-show.component";
import {AddShowModel} from "../AddShowModel";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  public showsList: Show[];
  public filmList: Film[];
  private _selectedShow: Show;
  private _newShow: Show;

  private _date: string;

  private _status: boolean = true;
  private selected: boolean;


  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  constructor(public dialog: MatDialog, private shows: ShowsService , private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.date = params.get('date'));

    this.shows.getShows().subscribe(list => {

      this.showsList = list.filter(show => {
        let date1: Date = new Date(this.date)
        let date2: Date = new Date(show.date)
        if(date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate()){
          return true;
        }
        return false;
      });
    });

    this.shows.getFilms().subscribe(list => {
      this.filmList = list;
    })
  }

  onSelect(show: Show): void {
    this._selectedShow = show;
  }


  get selectedShow(): Show {
    return this._selectedShow;
  }

  set selectedShow(value: Show) {
    this._selectedShow = value;
  }

  get newShow(): Show {
    return this._newShow;
  }

  set newShow(value: Show) {
    this._newShow = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  openDialog(add: boolean, edit: boolean): void {
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddShowComponent, {
        width: '30%',
        data: new AddShowModel(this.selectedShow, this.filmList)
      })
    } else if (edit) {
      dialogRef = this.dialog.open(EditShowComponent, {
        width: '30%',
        data: {show: this.selectedShow, filmList: this.filmList}
      })
    } else
      return;

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.title.length === 0 || result.filmId < 0) {
          result.title = "film bez tytułu"
          result.filmId = "9999"
        }

        let soldTickets: Map<string, number> = new Map<string, number>();
        result.hours.forEach(hour => {
          soldTickets.set(hour, 0);
        })
        this.newShow = new Show(result.showId, result.filmId, result.date, result.hours, result.roomId, soldTickets);

        if(add){
          this.shows.addShow(this.newShow);
        }
        else if(edit){
          this.showsList.forEach((obj, index, tab) =>{
            if(obj === this.selectedShow){
              tab[index] = this.selectedShow;
              this.shows.editShow(this.newShow, this.selectedShow);
              this.selectedShow = tab[index];
            }
          })
        }

      }
    })
  }

  deleteShow(): void {
    console.log("delete");
    this.showsList = this.showsList.filter(obj => obj !== this.selectedShow);
    this.shows.deleteShow(this.selectedShow);
    this.selectedShow = null;
    this.selected = false;
  }


  changeStatus(): void {
    if (this.selectedShow !== null)
      this.selectedShow.status = !this.selectedShow.status;
  }


}
