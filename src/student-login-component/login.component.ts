import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

//This is where the login page for students will go

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  imports: [RouterModule],
  styleUrls: ['login.component.css'] 
})

export class LoginComponent {

    constructor(public router: Router) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.router.navigate(['/example']);
    }
}