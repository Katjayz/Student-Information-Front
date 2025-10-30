import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//This is where the student information access will go

@Component({
  selector: 'app-student-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'student-information.component.html' 
})

export class StudentInformationComponent {
  student = {
    name: '',
    email: '',
    address: '',
    phone: '',
    gpa: 0.0,
    credits: 0,
    balance: 0.0
  };

  constructor(private router: Router) {}

  onSave() {
    console.log('Saved student info:', this.student);
    alert('Information saved successfully!');
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/student-login']);
  }
}