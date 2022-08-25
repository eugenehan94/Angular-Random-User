import { Component, OnInit } from '@angular/core';
import { LINK_TWO_TITLE, LINK_TWO_DESCRIPTION } from 'src/app/__helpers/constants';
import { LinkTwoUserService } from 'src/app/services/link-two-user.service';
@Component({
  selector: 'app-link-two-hero',
  templateUrl: './link-two-hero.component.html',
  styleUrls: ['./link-two-hero.component.css']
})
export class LinkTwoHeroComponent implements OnInit {

  title: string = LINK_TWO_TITLE;
  description: string = LINK_TWO_DESCRIPTION;

  constructor(private linkTwoUserService: LinkTwoUserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open (this.linkTwoUserService.linkTwoUser, '_blank', 'noopener, noreferrer');
  }


}
