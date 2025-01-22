import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {CITIES} from "../../interfaces/city.interface";
import {SERVICES} from "../../interfaces/service.interface";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";

declare const grecaptcha: any; // Declare reCAPTCHA variable

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButton,
    MatHint,
    MatError,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect
  ],
  standalone: true
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  recaptchaToken: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      recaptchaToken: new FormControl(null, Validators.required),
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      try {
        // Execute reCAPTCHA v3 and get the token
        const token = await grecaptcha.execute(environment.recaptcha.siteKey, {
          action: 'submit',
        });

        // Add the token to the form
        this.contactForm.controls['recaptchaToken'].setValue(token);

        // Send the form data to the server
        this.http.post('/api/contact', this.contactForm.value).subscribe(
          (response) => {
            console.log('Form submitted successfully:', response);
            // Handle success (e.g., display a success message)
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error submitting form:', error);
            // Handle error (e.g., display an error message)
          }
        );
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        // Handle error (e.g., display an error message)
      }
    } else {
      this.validateAllFormFields(this.contactForm);
    }
  }

  // Function to validate all form fields
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  protected readonly cities = CITIES;
  protected readonly services = SERVICES;
}
