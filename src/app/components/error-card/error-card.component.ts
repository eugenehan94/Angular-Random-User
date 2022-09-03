import { Component, OnInit } from '@angular/core';
import {
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit {

  faTriangleExclamation = faTriangleExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
