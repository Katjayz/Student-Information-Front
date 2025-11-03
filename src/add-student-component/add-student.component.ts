import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpParams } from '@angular/common/http';

//This is where the student information access will go

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: 'add-student.component.html'
})


export class AddStudentComponent {
  student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    gpa: 0,
    credits: 0,
    balance: 0
  };

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.http.post<boolean>(this.apiUrl + "addStudent", this.student).subscribe({
    next: (response) => {
      if (response == true) {
        alert(`Student ${this.student.lastName} added!`);
        this.router.navigate(['/student-list']);
      } else {
        alert(`Failed to add student ${this.student.lastName}`);
      }
      
     }});
  }

  cancel() {
    this.router.navigate(['/student-list']);
  }
}