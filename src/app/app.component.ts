import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-validation';
  loginForm: FormGroup;
  submitted: boolean = false;


  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      alert('Form Submitted!');
      console.log('Form Submitted!', this.loginForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      alert('Form is Not Valid!');
      alert('Ensure All Fields are Filled and Inputs are Valid!');
      console.log('Form is Not Valid!');
    }
  } 
}
