import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}

  openPersonalWebsite(): void {
    window.open(
      'https://eugenehan.netlify.app/',
      '_blank',
      'noopener, noreferrer'
    );
  }
}
