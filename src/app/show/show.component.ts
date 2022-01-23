import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Show} from "../Show";

@Component({
  selector: 'app-show-component',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: Show | undefined;
  @Output() changeShowStatus: EventEmitter<void> = new EventEmitter();
  @Output() deleteShow: EventEmitter<void> = new EventEmitter();
  @Output() editShow: EventEmitter<void> = new EventEmitter();
  @Output() buyTickerEvent: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    this.changeShowStatus.emit();
  }

  deleteSelectedShow(): void {
    this.deleteShow.emit();
  }

  editSelectedShow(): void {
    this.editShow.emit();
  }

  buyTicker(): void {
    this.buyTickerEvent.emit();
  }
}
