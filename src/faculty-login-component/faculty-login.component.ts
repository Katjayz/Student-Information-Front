import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

//This is where the login page for faculty will go

@Component({
  selector: 'app-faculty-login',
  templateUrl: 'faculty-login.component.html', 
  imports: [RouterModule],
  styleUrls: ['faculty-login.component.css'] 
})

export class FacultyLoginComponent {

    constructor(public router: Router) {}

    
    loginVariable: string = "login please";

    navigate() {
        this.router.navigate(['/example']);
    }
}