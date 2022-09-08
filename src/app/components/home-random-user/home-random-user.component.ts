import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import {
  faUser,
  faEnvelope,
  faCakeCandles,
  faHome,
  faPhone,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { LinkOneUser } from 'src/app/__helpers/models';
@Component({
  selector: 'app-home-random-user',
  templateUrl: './home-random-user.component.html',
  styleUrls: ['./home-random-user.component.css'],
})
export class HomeRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faHome = faHome;
  faPhone = faPhone;
  faTriangleExclamation = faTriangleExclamation;

  user: LinkOneUser[] = [];
  isLoading: boolean = true;
  introText: string = 'Hi, My name is';
  infoText?: string;
  error: any;

  @ViewChild('name') name?: ElementRef<HTMLInputElement>;
  @ViewChild('email') email?: ElementRef<HTMLInputElement>;
  @ViewChild('dob') dob?: ElementRef<HTMLInputElement>;
  @ViewChild('location') location?: ElementRef<HTMLInputElement>;
  @ViewChild('phone') phone?: ElementRef<HTMLInputElement>;

  constructor(private userService: UserService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      (response) => {
        this.user = response.results;
        const returnedResult = this.user.find((result: any) => result);
        this.infoText = `${returnedResult?.name.first} ${returnedResult?.name.last} `;
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  onMouseOver(input: any) {
    this.renderer.removeClass(this.name?.nativeElement, 'active')
    this.renderer.removeClass(this.email?.nativeElement, 'active')
    this.renderer.removeClass(this.dob?.nativeElement, 'active')
    this.renderer.removeClass(this.location?.nativeElement, 'active')
    this.renderer.removeClass(this.phone?.nativeElement, 'active')

    this.renderer.addClass(input, 'active')

    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText;
    this.infoText = getInfoText;
  }
}

// https://www.techiediaries.com/add-access-html-data-attribute-angular/
