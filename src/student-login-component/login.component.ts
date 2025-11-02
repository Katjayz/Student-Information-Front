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
      // Later, connect this to backend for real login validation
    if (this.email && this.password) {
      this.roleService.studentLogin(this.email,this.password)
      .subscribe(response => {
        if (response != null ) {
          this.roleService.saveToken(response.token);
          this.router.navigate(['/student-list']);
        } else {
          this.failToLogin = true;
        }
          });
    }
  }
}