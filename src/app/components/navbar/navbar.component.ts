import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Links = [{
    label: "Home"
  }]

  constructor() { }

  ngOnInit(): void {
  }
  // refresh() - used to reload page
  refresh(): void {
    window.location.reload()
  }

}