import { Component, OnInit } from '@angular/core';
import { LinkTwoUserService } from 'src/app/services/link-two-user.service';
import { faUser, faEnvelope, faCakeCandles, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-link-two-random-user',
  templateUrl: './link-two-random-user.component.html',
  styleUrls: ['./link-two-random-user.component.css'],
})
export class LinkTwoRandomUserComponent implements OnInit {

  faUser = faUser;
  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faHome = faHome;
  faPhone = faPhone;
  user?: any

  introText: any
  infoText: any

  constructor(private linkTwoUserService: LinkTwoUserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkTwoUserService.getLinkTwoUsers().subscribe((response) => {
      this.user = response;
      console.log("this.user: ", this.user)
    });
  }

  onMouseOver(input: any): void {
    console.log("onMouseOver input: ", input)
    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }
}
