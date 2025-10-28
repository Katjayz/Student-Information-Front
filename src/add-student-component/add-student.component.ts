import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//This is where the student information access will go

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'add-student.component.html'
})

export class AddStudentComponent {
  student = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    gpa: 0,
    credits: 0,
    balance: 0
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Added Student:', this.student);
    alert(`Student ${this.student.name} added!`);
    this.router.navigate(['/student-list']);
  }

  cancel() {
    this.router.navigate(['/student-list']);
  }
}