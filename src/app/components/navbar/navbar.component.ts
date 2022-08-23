import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  test: any;
  showMobileMenu: boolean = false;

  public screenWidth: any;
  currentRoute?: any;

  constructor(private router: Router) {  }

  ngOnInit(): void {
    this.test = document.querySelectorAll('a');
    this.screenWidth = window.innerWidth;
  }
  // refresh() - used to reload page
  refresh(): void {
    window.location.reload();
  }
  toggleMobileMenu(input?: any): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
