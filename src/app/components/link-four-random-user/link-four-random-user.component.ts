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
import { LinkFourUser, LinkFourUserData } from 'src/app/interfaces/link-four-user-data';
// HttpErrorResponse allow you to use the Angular HTTP request (get, put, post, delete, etc.)
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-link-four-random-user',
  templateUrl: './link-four-random-user.component.html',
  styleUrls: ['./link-four-random-user.component.css'],
})
export class LinkFourRandomUserComponent implements OnInit {
  // Font Awesome Icons
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

  // The Renderer2 allows us to manipulate the DOM elements, without accessing the
  // DOM directly. It provides a layer of abstraction between the DOM element and the
  // component code. Using Renderer2 we can create an element, add a text node to it,
  // append child element using the appendchild method., etc. We can also add or
  // remove styles, HTML attributes, CSS Classes & properties, etc. We can also attach
  // and listen to events etc.
  constructor(
    private linkFourUserServer: LinkFourUserService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  // According to Rxjs library documentation, the subscribe only supports one object now,
  // thus put the next, error and complete in one object as seen below
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
  // The input is the DOM <li> element
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
