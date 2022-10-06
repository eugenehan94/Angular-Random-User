import { SNACKBAR_MESSAGE } from 'src/app/__helpers/constants';
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
  SNACKBAR_MESSAGE = SNACKBAR_MESSAGE;
  faGgCircle = faGgCircle;
  // The @Input() allows the value to be passed from the parent to this child component
  @Input() submitClicked?: boolean;
  // The @Output() passes the property to the parent component: contact.component.html
  @Output() submitUnclick = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  closeSnackbarOnClick(): void {
    // With the @Output() above, this allows the value emitted here to be pass up to parent
    this.submitUnclick.emit(false)
  }
}
