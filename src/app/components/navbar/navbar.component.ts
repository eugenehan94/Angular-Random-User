import {
  Component,
  OnInit,
  HostListener,
} from '@angular/core';
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
  showMobileMenu: boolean = false;

  public screenWidth!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
