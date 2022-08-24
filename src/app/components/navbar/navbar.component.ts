import {
  Component,
  OnInit,
  HostListener,
  OnChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  faBars = faBars;
  faXmark = faXmark;
  test: any;
  showMobileMenu: boolean = false;

  public screenWidth: any;
  currentRoute?: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.test = document.querySelectorAll('a');
    this.screenWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
    console.log("value test: ", this.testing )
    let width = this.testing?.nativeElement.offsetWidth;
    console.log("test width: ", width)
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
  @ViewChild('testing')
  testing?: ElementRef;
}
