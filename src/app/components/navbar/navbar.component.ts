import { Component, OnInit } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
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
  constructor() {}

  ngOnInit(): void {
    this.test = document.querySelectorAll('a');
    // console.log('test queryS: ', this.test);
  }
  // refresh() - used to reload page
  refresh(): void {
    window.location.reload();
  }
  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu
  }
}
