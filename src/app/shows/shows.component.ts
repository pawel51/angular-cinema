import { Component, OnInit } from '@angular/core';
import {Show} from "../Show";
import {ShowsService} from "../shows.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Film} from "../Film";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  public showsList: Show[];
  private _selectedShow: Show;
  private _newShow: Show;

  private _date: string;


  constructor(public dialog: MatDialog, private shows: ShowsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.shows.getShows().subscribe(list => {
      this.showsList = list;
    });
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

}
