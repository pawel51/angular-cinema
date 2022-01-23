import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Film} from "../Film";
import {Show} from "../Show";
import {AddShowModel} from "../AddShowModel";

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditShowComponent>, @Inject(MAT_DIALOG_DATA) public data: AddShowModel) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
