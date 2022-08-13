import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-random-user',
  templateUrl: './home-random-user.component.html',
  styleUrls: ['./home-random-user.component.css']
})
export class HomeRandomUserComponent implements OnInit {

  user: any = [];
  selected: any = "name";
  testVar: string = "name";
  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser().subscribe((response) => {
      this.user = response.results
    })
  }

  test(){
    console.log("clicked")
  }

}

// https://www.techiediaries.com/add-access-html-data-attribute-angular/