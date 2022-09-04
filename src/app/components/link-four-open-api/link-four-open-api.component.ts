import { Component, OnInit } from '@angular/core';
import { LinkFourUserService } from 'src/app/services/link-four--user.service';
import { VIEW_API_TEXT, OPEN_API_TITLE } from 'src/app/__helpers/constants';
@Component({
  selector: 'app-link-four-open-api',
  templateUrl: './link-four-open-api.component.html',
  styleUrls: ['./link-four-open-api.component.css']
})
export class LinkFourOpenApiComponent implements OnInit {

  viewApiBtnText = VIEW_API_TEXT;
  title = OPEN_API_TITLE;

  constructor(private linkFourUserService: LinkFourUserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open (this.linkFourUserService.linkFourUser, '_blank', 'noopener, noreferrer');
  }

}
