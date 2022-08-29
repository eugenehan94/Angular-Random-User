import { Component, OnInit } from '@angular/core';
import { LinkTwoUserService } from 'src/app/services/link-two-user.service';
import { faUser, faEnvelope, faCakeCandles, faHome, faPhone, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
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
  faTriangleExclamation = faTriangleExclamation;
  user?: any
  isLoading: boolean = true;
  introText: string = 'Hello, my name is'
  infoText?: any;

  error: any;

  constructor(private linkTwoUserService: LinkTwoUserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkTwoUserService.getLinkTwoUsers().subscribe((response) => {
      this.user = response;
      this.infoText = `${this.user.first_name} ${this.user.last_name}`
      this.isLoading = false;
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
  }

  onMouseOver(input: any): void {
    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }
}
