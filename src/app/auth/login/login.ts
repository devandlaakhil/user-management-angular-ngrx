import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  fb = inject(FormBuilder);
  router = inject(Router);
  errorMessage:string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('loggedIn','true');
      this.router.navigate(['/users']);
    }else{
        this.errorMessage = 'Invalid email or password';
    }


  }
}
