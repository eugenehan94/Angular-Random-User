import { Component, OnInit } from '@angular/core';
import { LINK_THREE_TITLE, LINK_THREE_DESCRIPTION } from 'src/app/__helpers/constants';
import { LinkThreeUserService } from 'src/app/services/link-three-user.service';
@Component({
  selector: 'app-link-three-hero',
  templateUrl: './link-three-hero.component.html',
  styleUrls: ['./link-three-hero.component.css']
})
export class LinkThreeHeroComponent implements OnInit {

  title: string = LINK_THREE_TITLE;
  description: string = LINK_THREE_DESCRIPTION;

  constructor(private linkThreeUserService: LinkThreeUserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open (this.linkThreeUserService.linkThreeUser, '_blank', 'noopener, noreferrer');
  }


}
