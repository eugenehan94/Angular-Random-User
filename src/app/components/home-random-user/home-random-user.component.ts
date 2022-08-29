import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { faUser, faEnvelope, faCakeCandles, faHome, faPhone, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-random-user',
  templateUrl: './home-random-user.component.html',
  styleUrls: ['./home-random-user.component.css'],
})
export class HomeRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faHome = faHome;
  faPhone = faPhone;
  faTriangleExclamation = faTriangleExclamation;
  user: any = [];
  isLoading: boolean = true;
  introText: string = 'Hi, My name is';
  infoText?: string
  error: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((response) => {
      this.user = response.results;
      const returnedResult = this.user.find((result: any) => result)
      this.infoText = `${returnedResult.name.first} ${returnedResult.name.last} `
      this.isLoading = false;
    }, error => {
      this.error = error
      this.isLoading = false;
    });
  }

  test(input: any) {
    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }
}

// https://www.techiediaries.com/add-access-html-data-attribute-angular/
