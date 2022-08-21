import { Component, OnInit } from '@angular/core';
import { LinkFourUserService } from 'src/app/services/link-four--user.service';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-four-random-user',
  templateUrl: './link-four-random-user.component.html',
  styleUrls: ['./link-four-random-user.component.css']
})
export class LinkFourRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  user?: any

  introText?: string = "Hello, my name is ";
  infoText?: string;

  constructor(private linkFourUserServer: LinkFourUserService) { }

  ngOnInit(): void {
  this.getUser();
  }

  getUser(): void {
    this.linkFourUserServer.getLinkFourUser().subscribe((response) => {
      this.user = response.data;
      this.infoText = this.user.first_name + ' ' + this.user.last_name;
    })
  }

  onMouseOver(input: any): void {
    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }

}
