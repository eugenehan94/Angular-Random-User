import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  test: any;
  constructor() {}

  ngOnInit(): void {
    this.test = document.querySelectorAll('a');
    // console.log('test queryS: ', this.test);
  }
  // refresh() - used to reload page
  refresh(): void {
    window.location.reload();
  }
}
