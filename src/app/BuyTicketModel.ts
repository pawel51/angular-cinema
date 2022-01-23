import {Show} from "./Show";
import {Film} from "./Film";

export class BuyTicketModel {
  public tickets: Map<number, number>;

  constructor(private selectedShow: Show, private filmList: Film[]) {

  }

}


