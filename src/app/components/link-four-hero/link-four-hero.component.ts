import { Component, OnInit } from '@angular/core';
import { LINK_FOUR_TITLE, LINK_FOUR_DESCRIPTION} from 'src/app/__helpers/constants';

@Component({
  selector: 'app-link-four-hero',
  templateUrl: './link-four-hero.component.html',
  styleUrls: ['./link-four-hero.component.css']
})
export class LinkFourHeroComponent implements OnInit {

  title: string = LINK_FOUR_TITLE;
  description: string = LINK_FOUR_DESCRIPTION;

  constructor() { }

  ngOnInit(): void {
  }



}
