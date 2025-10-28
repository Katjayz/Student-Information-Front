import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is where the login page for faculty will go

@Component({
  selector: 'app-faculty-login',
  standalone: true,
  templateUrl: 'faculty-login.component.html', 
  imports: [RouterModule, CommonModule, FormsModule, RouterLink]
})

export class FacultyLoginComponent {
  email = '';
  password = '';

    constructor(public router: Router) {}

    loginVariable: string = "login please";

    navigate() {
        this.router.navigate(['/example']);
    }

    onSubmit() {
      if (this.email && this.password) {
        // Simulated login — replace with backend call later
        localStorage.setItem('role', 'faculty');
        localStorage.setItem('email', this.email);
        this.router.navigate(['/student-list']);
      }
    }
}