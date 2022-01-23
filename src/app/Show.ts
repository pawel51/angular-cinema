import {Film} from "./Film";

export class Show {

  private _film: Film;
  private _status: boolean = false;
  private _dateObj: Date;


  get dateObj(): Date {
    return this._dateObj;
  }

  set dateObj(value: Date) {
    this._dateObj = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get film(): Film {
    return this._film;
  }

  set film(value: Film) {
    this._film = value;
  }

  constructor(public showId: string,
              public filmId: string,
              public date: string,
              public hours: string[],
              public roomId: string,
              public soldTickets: Map<string, number>
              ) {
    this._dateObj = new Date(this.date);
  }

}
