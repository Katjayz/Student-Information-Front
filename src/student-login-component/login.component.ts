import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RoleService } from '../role.service';

//This is where the login page for students will go

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  imports: [RouterModule],
  styleUrls: ['login.component.css'] 
})

export class LoginComponent {

    constructor(public router: Router, public roleService: RoleService) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.roleService.studentLogin('john.smith@email.com','JohnsP@$$word')
      .subscribe(response => {
        this.roleService.saveToken(response.token);
          });
    }
}