import { Component, OnInit, HostListener } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  showMobileMenu: boolean = false;

  currentPageMobileMenu?: string;

  routerEvent?: any;
  public screenWidth!: number;

  year: number = new Date().getFullYear();

  constructor(private router: Router, location: Location) {}

  ngOnInit(): void {
    // window.innerWidth to find the window width on resize.
    this.screenWidth = window.innerWidth;
  }

  ngOnDestroy() {
    // Unsubscribe to the subscribe router events
    this.routerEvent.unsubscribe();
  }
  // Toggles the open/close state of the Mobile menu
  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  // Triggers when window is being resized, the value is then stored in "screenWidth"
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  openPersonalWebsite(): void {
    window.open(
      'https://eugenehan.netlify.app/',
      '_blank',
      'noopener, noreferrer'
    );
  }
}
