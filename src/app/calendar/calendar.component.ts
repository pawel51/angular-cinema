import {Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarView, DAYS_OF_WEEK} from "angular-calendar";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {FilmsService} from "../films.service";
import {Film} from "../Film";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css', ]
})
export class CalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  weekstartson : number = 1;

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = []


  constructor(private router: Router, private filmList: FilmsService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    let dateString: string = '' + date.getFullYear();
    dateString += '-';
    date.getMonth() < 9 ? dateString += '0' + (date.getMonth() + 1) : dateString += (date.getMonth() + 1);
    date.getDate() < 10 ? dateString += '-0' + (date.getDate()) : dateString += '-' + date.getDate();
    this.router.navigate(['dayFilms/' + dateString]);

  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
    this.filmList.getFilms().subscribe(list => list.forEach(film => {
      const event: CalendarEvent = { title: '', start: new Date()}
      event.title = film.title;
      this.events.push(event);
    }))
  }


}
