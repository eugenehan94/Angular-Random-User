// @TODO: When client is on specific route, clicking it from mobile menu,
// should allow anything to happen. Which includes the menu shouldn't close.

import { Component, OnInit, HostListener } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd, NavigationStart, Event as NavigationEvent } from '@angular/router';
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

  routerEvent?:any;
  public screenWidth!: number;

  constructor(private router: Router, location: Location) {}

  ngOnInit(): void {
   this.routerEvent= this.screenWidth = window.innerWidth;
    // This block of code reads the current page user is on
    // example: /link-four
    this.router.events.subscribe((event:NavigationEvent) => {
      if (event instanceof NavigationStart){
        console.log("event.url: ", event.url.substring(1).replace('-', ' ') )
        this.currentPageMobileMenu = event.url.substring(1).replace('-', ' ')
      }
    })

    // console.log(this.router.events);
    // console.log('window.location.href: ', window.location.href);

    // this.router.events.subscribe((val) => {
    //   if (location.path() != '') {
    //     console.log("location: ", location.path())
    //     // this.route = location.path();
    //   } else {
    //     console.log("else executed")
    //     // this.route = 'Home';
    //   }
    // });
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
}
