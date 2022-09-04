import { Component, OnInit } from '@angular/core';
import {
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { CARD_ERROR_MESSAGE } from 'src/app/__helpers/constants';
@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit {

  faTriangleExclamation = faTriangleExclamation;
  errorMessage = CARD_ERROR_MESSAGE;

  constructor() { }

  ngOnInit(): void {
  }

}
