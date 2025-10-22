import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//This is where the login page for both student and faculty will go

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html', 
  styleUrls: ['login.component.css'] 
})

export class LoginComponent {

    constructor(public router: Router) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.router.navigate(['/example']);
    }
}