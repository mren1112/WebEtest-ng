import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  // styleUrls: ['./confirm-dialog.component.css']
})
export class PublicDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}
