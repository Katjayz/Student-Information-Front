import { Component, OnInit } from '@angular/core';
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

export class StudentInformationComponent implements OnInit {

  role: string | null = null;
  isEditing = false;

   // Mock student info for demonstration
  student = {
    name: 'John Doe',
    email: 'john.doe@uwec.edu',
    address: '123 University Ave, Eau Claire, WI',
    phone: '715-555-1234',
    gpa: 3.8,
    credits: 15,
    balance: 350.50
  };

  // Mock data for faculty view
  students = [
    { name: 'Alice Johnson', email: 'alice@uwec.edu', gpa: 3.9, credits: 45, balance: 1200.50 },
    { name: 'Brian Smith', email: 'brian@uwec.edu', gpa: 3.4, credits: 60, balance: 3400.75 },
    { name: 'Catherine Lee', email: 'catherine@uwec.edu', gpa: 3.7, credits: 72, balance: 2750.00 }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Temporarily set role manually for testing; later this will come from login
    this.role = localStorage.getItem('role') || 'student';
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSave() {
    console.log('Saved student info:', this.student);
    alert('Information saved successfully!');
    this.isEditing = false;
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/student-login']);
  }
}