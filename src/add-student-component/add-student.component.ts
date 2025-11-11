import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  isValidEmail = true;
  validateEmail(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.isValidEmail = value.endsWith('@uwec.edu');
  }
  
  validateGPA(event: any) {
    const input = event.target as HTMLInputElement;
    let value = parseFloat(input.value);
    if (isNaN(value) || value < 0) value = 0;
    if (value > 4) value = 4;
    this.student.gpa = value;
    input.value = value.toString();
  }

  isValidAddress = true;
  validateAddress(event: any) {
    const input = event.target as HTMLInputElement;
    const cleanValue = input.value.replace(/[^a-zA-Z0-9\s,.\u00C0-\u017F]/g, '');
    this.student.address = cleanValue;
    input.value = cleanValue;
    this.isValidAddress = cleanValue === input.value;
  }

  isValidPhone = true;
  validatePhone(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.student.phone = input.value;
    this.isValidPhone = /^\d{10}$/.test(this.student.phone);
  }

   isValidId = true;
  validateId(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length>4) {
      input.value = input.value.slice(0, 4);
    }
    this.student.id = Number(input.value);
    this.isValidId = /^\d{4}$/.test(input.value);
  }

  isValidFirstName = true;
  isValidLastName = true;
  validateName(event: any, type: 'first' | 'last') {
    console.log("validating name...")
    const input = event.target as HTMLInputElement;
    const cleanValue = input.value.replace(/[^a-zA-Z\s\u00C0-\u017F-]/g, '');
    input.value = cleanValue;

    if (type == 'first') {
      this.student.firstName = cleanValue;
      this.isValidFirstName = /^[a-zA-Z\s\u00C0-\u017F-]+$/.test(cleanValue);
    } else {
      this.student.lastName = cleanValue;
      this.isValidLastName = /^[a-zA-Z\s\u00C0-\u017F-]+$/.test(cleanValue);
    }
  }
}