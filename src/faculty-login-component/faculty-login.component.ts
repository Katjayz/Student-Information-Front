import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';
import { NgIf } from '@angular/common';

//This is where the login page for faculty will go

@Component({
  selector: 'app-faculty-login',
  standalone: true,
  templateUrl: 'faculty-login.component.html', 
  imports: [RouterModule, CommonModule, FormsModule, RouterLink, NgIf],
  styleUrls: ['faculty-login.component.css'] 
})

export class FacultyLoginComponent {
  email = '';
  password = '';
  failToLogin = false;
    
  constructor(public router: Router, public roleService: RoleService) {}

    onSubmit() {
      if (this.email && this.password) {
        this.roleService.facultyLogin(this.email,this.password)
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