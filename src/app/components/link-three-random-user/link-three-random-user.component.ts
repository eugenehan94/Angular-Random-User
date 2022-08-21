import { Component, OnInit } from '@angular/core';
import { LinkThreeUserService } from 'src/app/services/link-three-user.service';
import { faUser, faEnvelope, faCakeCandles, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-three-random-user',
  templateUrl: './link-three-random-user.component.html',
  styleUrls: ['./link-three-random-user.component.css']
})
export class LinkThreeRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faHome = faHome;
  faPhone = faPhone;

  user?: any;

  introText?: string = 'Hello, my name is'
  infoText?: string = 'Info text';

  constructor(private linkThreeUserService: LinkThreeUserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkThreeUserService.getLinkThreeUser().subscribe((response) => {  
      // response.data is an array with one index - thus converted to object
      const obj = {...response.data[0]}
      this.user = obj;
      this.infoText = `${this.user.firstname} ${this.user.lastname}`
    })
  }
  onMouseOver(input:any){
    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }
}
