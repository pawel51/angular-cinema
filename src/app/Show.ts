import {Film} from "./Film";

export class Show {

  private _film: Film;

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
              public soldTickets: Map<string, string>
              ) {
  }

}
