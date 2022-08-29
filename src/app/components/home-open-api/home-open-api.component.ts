import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { VIEW_API_TEXT } from 'src/app/__helpers/constants';
@Component({
  selector: 'app-home-open-api',
  templateUrl: './home-open-api.component.html',
  styleUrls: ['./home-open-api.component.css']
})
export class HomeOpenApiComponent implements OnInit {

  viewApiBtnText = VIEW_API_TEXT;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  
  onClick(): void {
    window.open (this.userService.userLink, '_blank', 'noopener, noreferrer');
  }
}
