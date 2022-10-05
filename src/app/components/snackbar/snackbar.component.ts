import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faGgCircle
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  faGgCircle = faGgCircle;
  @Input() submitClicked: any;
  @Output() submitUnclick = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  closeSnackbarOnClick(): void {
    console.log("close snackbar click")
    this.submitClicked = false;
    this.submitUnclick.emit(false)
  }
}
