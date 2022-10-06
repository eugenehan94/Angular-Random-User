import { Component, OnInit } from '@angular/core';
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

  submitClicked: boolean = false;

  profileForm = this.fb.group({
    //  Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$') - allows letter inputs only.
    // Numbers will prompt invalid input.
    // Validators.required - input can't be blank
    firstName: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
    lastName: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
    // Validators.email - checks for the @ as seen in emails
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // .reset() is provided by reactive form to clear inputs in form.s
    this.profileForm.reset();
    this.submitClicked = true;
  }
  closeSnackbar(): void {
    this.submitClicked = false;
  }
}
