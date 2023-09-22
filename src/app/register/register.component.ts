import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { nhost } from '../lib/nhost';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule
  ],
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(){
    console.log(nhost.graphql.httpUrl)
  }

  async submitApplication() {
    await nhost.auth.signUp({
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? ''
    })
  }
}