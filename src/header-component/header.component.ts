import { Component } from '@angular/core';
import { Router } from '@angular/router';

//This is the header, used for navigation.

@Component({
  selector: 'app-header',
  template: `
        <div class="header-box">
            Student Information System
            <div class="button-holder">
            <button (click)="navigate('logs')">Logs</button>
            <button (click)="navigate('addStudent')">Add Student</button>
            <button (click)="navigate('studentInformation')">Student Information</button>
            <button (click)="navigate('test')">Testing Backend</button>
            </div>
        </div>
      `, 
  styleUrls: ['header.component.css'] 
})

export class HeaderComponent {

    constructor(public router: Router) {}

    navigate(path: string) {
        this.router.navigate(['/'+path]);
    }
}