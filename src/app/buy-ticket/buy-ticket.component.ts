import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddShowModel} from "../AddShowModel";
import {BuyTicketModel} from "../BuyTicketModel";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BuyTicketComponent>, @Inject(MAT_DIALOG_DATA) public data: BuyTicketModel) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
