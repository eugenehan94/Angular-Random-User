import { Component, OnInit } from '@angular/core';
import { LinkThreeUserService } from 'src/app/services/link-three-user.service';

@Component({
  selector: 'app-link-three-random-user',
  templateUrl: './link-three-random-user.component.html',
  styleUrls: ['./link-three-random-user.component.css']
})
export class LinkThreeRandomUserComponent implements OnInit {

  user?: any;

  introText?: string = 'Random intro';
  infoText?: string = 'Info text';

  constructor(private linkThreeUserService: LinkThreeUserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.linkThreeUserService.getLinkThreeUser().subscribe((response) => {  
      // response.data is an array with one index - thus converted to object
      const obj = {...response.data[0]}
      this.user = obj;
      console.log("this.user3: ", this.user)
    })
  }
}
