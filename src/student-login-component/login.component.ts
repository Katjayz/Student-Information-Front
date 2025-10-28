import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


//This is where the login page for students will go

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  imports: [RouterModule, CommonModule, FormsModule, RouterLink]
})

export class LoginComponent {
  email = '';
  password = '';

    constructor(public router: Router) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.router.navigate(['/example']);
    }

    onSubmit() {
      // Later, connect this to backend for real login validation
    if (this.email && this.password) {
      localStorage.setItem('role', 'student');
      localStorage.setItem('email', this.email);
      this.router.navigate(['/student-info']);
    }
  }
}