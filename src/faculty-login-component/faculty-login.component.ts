import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RoleService } from '../role.service';

//This is where the login page for faculty will go

@Component({
  selector: 'app-faculty-login',
  templateUrl: 'faculty-login.component.html', 
  imports: [RouterModule],
  styleUrls: ['faculty-login.component.css'] 
})

export class FacultyLoginComponent {

    constructor(public router: Router, public roleService: RoleService) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.roleService.studentLogin('john.smith@email.com','JohnsP@$$word')
      .subscribe(response => {
        this.roleService.saveToken(response.token);
          });
    }
}