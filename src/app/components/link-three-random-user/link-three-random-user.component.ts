import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LinkThreeUserService } from 'src/app/services/link-three-user.service';
import {
  faUser,
  faEnvelope,
  faCakeCandles,
  faHome,
  faPhone,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { LinkThreeUser } from '../../__helpers/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-link-three-random-user',
  templateUrl: './link-three-random-user.component.html',
  styleUrls: ['./link-three-random-user.component.css'],
})
export class LinkThreeRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faHome = faHome;
  faPhone = faPhone;
  faTriangleExclamation = faTriangleExclamation;
  isLoading: boolean = true;
  user?: LinkThreeUser;

  introText?: string = 'Hello, my name is';
  infoText?: string = 'Info text';

  error?: HttpErrorResponse;

  @ViewChild('name') name?: ElementRef<HTMLInputElement>;
  @ViewChild('email') email?: ElementRef<HTMLInputElement>;
  @ViewChild('dob') dob?: ElementRef<HTMLInputElement>;
  @ViewChild('address') address?: ElementRef<HTMLInputElement>;
  @ViewChild('phone') phone?: ElementRef<HTMLInputElement>;

  constructor(
    private linkThreeUserService: LinkThreeUserService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkThreeUserService.getLinkThreeUser().subscribe({
      next: (response) => {
        // response.data is an array with one index - thus converted to object
        const obj = { ...response.data[0] };
        this.user = obj;
        this.infoText = `${this.user?.firstname} ${this.user?.lastname}`;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      },
    });
  }
  onMouseOver(input: HTMLElement) {
    this.renderer.removeClass(this.name?.nativeElement, 'active');
    this.renderer.removeClass(this.email?.nativeElement, 'active');
    this.renderer.removeClass(this.dob?.nativeElement, 'active');
    this.renderer.removeClass(this.address?.nativeElement, 'active');
    this.renderer.removeClass(this.phone?.nativeElement, 'active');
    this.renderer.addClass(input, 'active');

    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText!;
    this.infoText = getInfoText!;
  }
}
