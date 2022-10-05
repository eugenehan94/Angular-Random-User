import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
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

  submitClicked = false;
  myTimeout: any;
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  // })

  profileForm = this.fb.group({
    //  Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$') - allows letter inputs only.
    // Numbers will prompt invalid input.
    firstName: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
    lastName: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('profileForm: ', this.profileForm);
  }

  ngOnDestroy(): void {
    clearTimeout(this.myTimeout)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm);
    this.profileForm.reset();

    this.submitClicked = true;
    console.log("submitClicked: ", this.submitClicked)
    // this.myTimeout = setTimeout(() => {this.submitClicked=false }, 3000); 
  }
  closeSnackbar () {
    console.log("CloseSnackBar CALLED")
    this.submitClicked = false;
  }
}
