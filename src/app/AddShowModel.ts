import {Show} from "./Show";
import {Film} from "./Film";

export class AddShowModel {
  private _show: Show;
  private _filmList: Film[];


  get show(): Show {
    return this._show;
  }

  set show(value: Show) {
    this._show = value;
  }

  get filmList(): Film[] {
    return this._filmList;
  }

  set filmList(value: Film[]) {
    this._filmList = value;
  }

  constructor(show: Show, filmList: Film[]) {
    this._show = show;
    this._filmList = filmList;
  }
}
