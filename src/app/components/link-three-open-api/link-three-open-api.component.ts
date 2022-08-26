import { Component, OnInit } from '@angular/core';
import { LinkThreeUserService } from 'src/app/services/link-three-user.service';
import { VIEW_API_TEXT } from 'src/app/__helpers/constants';

@Component({
  selector: 'app-link-three-open-api',
  templateUrl: './link-three-open-api.component.html',
  styleUrls: ['./link-three-open-api.component.css']
})
export class LinkThreeOpenApiComponent implements OnInit {

  viewApiBtnText = VIEW_API_TEXT;

  constructor(private linkThreeUserService: LinkThreeUserService) { }

  ngOnInit(): void {
  }
  onClick(): void {
    window.open (this.linkThreeUserService.linkThreeUser, '_blank', 'noopener, noreferrer');
  }
}
