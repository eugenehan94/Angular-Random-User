import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  name = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
