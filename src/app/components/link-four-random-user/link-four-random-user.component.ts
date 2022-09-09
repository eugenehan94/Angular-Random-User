import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LinkFourUserService } from 'src/app/services/link-four--user.service';
import {
  faUser,
  faEnvelope,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
// import { LinkFourUser } from 'src/app/__helpers/models';
import { LinkFourUser, LinkFourUserData } from 'src/app/interfaces/link-four-user-data';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-link-four-random-user',
  templateUrl: './link-four-random-user.component.html',
  styleUrls: ['./link-four-random-user.component.css'],
})
export class LinkFourRandomUserComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faTriangleExclamation = faTriangleExclamation;
  isLoading: boolean = true;
  user?: LinkFourUser;

  introText?: string = 'Hello, my name is ';
  infoText?: string;

  error?: HttpErrorResponse;

  @ViewChild('name') name?: ElementRef<HTMLInputElement>;
  @ViewChild('email') email?: ElementRef<HTMLInputElement>;

  constructor(
    private linkFourUserServer: LinkFourUserService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkFourUserServer.getLinkFourUser().subscribe({
      next: (response: LinkFourUserData) => {
        this.user = response.data;
        this.infoText = this.user?.first_name + ' ' + this.user?.last_name;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      },
    });
  }

  onMouseOver(input: HTMLElement): void {
    this.renderer.removeClass(this.name?.nativeElement, 'active');
    this.renderer.removeClass(this.email?.nativeElement, 'active');
    this.renderer.addClass(input, 'active');

    let getIntroText = input.getAttribute('data-title');
    let getInfoText = input.getAttribute('data-value');
    this.introText = getIntroText!;
    this.infoText = getInfoText!;
  }
}
