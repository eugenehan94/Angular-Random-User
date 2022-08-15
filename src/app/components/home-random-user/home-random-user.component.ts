import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-random-user',
  templateUrl: './home-random-user.component.html',
  styleUrls: ['./home-random-user.component.css'],
})
export class HomeRandomUserComponent implements OnInit {
  user: any = [];
  introText: string = 'Hi, My name is';
  infoText?: string
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((response) => {
      this.user = response.results;
      console.log("user: ", this.user)
      const returnedResult = this.user.find((result: any) => result)
      this.infoText = `${returnedResult.name.first} ${returnedResult.name.last} `
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
