import { Component, OnInit } from '@angular/core';
import { LinkTwoUserService } from 'src/app/services/link-two-user.service';
import { VIEW_API_TEXT } from 'src/app/__helpers/constants';
@Component({
  selector: 'app-link-two-open-api',
  templateUrl: './link-two-open-api.component.html',
  styleUrls: ['./link-two-open-api.component.css']
})
export class LinkTwoOpenApiComponent implements OnInit {

  viewApiBtnText = VIEW_API_TEXT;

  constructor(private linkTwoUserService: LinkTwoUserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open (this.linkTwoUserService.linkTwoUser, '_blank', 'noopener, noreferrer');
  }

}
