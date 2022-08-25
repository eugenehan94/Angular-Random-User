import { Component, OnInit } from '@angular/core';
import { HOME_HERO_TITLE, HOME_HERO_DESCRIPTION } from 'src/app/__helpers/constants';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {
  title = HOME_HERO_TITLE;
  description = HOME_HERO_DESCRIPTION;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open (this.userService.userLink, '_blank', 'noopener, noreferrer');
  }

}
