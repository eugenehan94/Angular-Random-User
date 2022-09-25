import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  // })

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log("profileForm: ", this.profileForm)
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value)
  }
}
