import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';
import { NgIf } from '@angular/common';


//This is where the login page for students will go

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  imports: [RouterModule, CommonModule, FormsModule, RouterLink, NgIf],
  styleUrls: ['login.component.css'] 
})

export class LoginComponent {
  email = '';
  password = '';
  failToLogin = false;

  constructor(public router: Router, private roleService: RoleService) {}

    
  loginVariable: string = "login please";

  onSubmit() {
    if (this.email && this.password) {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('role_token');
      this.roleService.studentLogin(this.email, this.password)
      .subscribe({
        next: (response) => {
          if (response != null) {
            this.roleService.saveToken(response.token);
            localStorage.setItem('userEmail', this.email);
            this.router.navigate(['/student-information']);
          } else {
            this.failToLogin = true;
            localStorage.removeItem('userEmail');
            localStorage.removeItem('role_token');
          }
        },
          error: () => {
            this.failToLogin = true;
            localStorage.removeItem('userEmail');
            localStorage.removeItem('role_token');
          }
        }
      );
    }
  }
}