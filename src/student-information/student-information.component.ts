import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    gpa: number;
    credits: number;
    balance: number;
  };

//This is where the student information access will go

@Component({
  selector: 'app-student-information',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: 'student-information.component.html' 
})

export class StudentInformationComponent implements OnInit {

  private apiUrl = 'http://localhost:8080/api/';

  student: Student = {
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
  }

  studentList: Student[] = [];

  id = '0';
  role: string | null = null;
  isEditing = false;
  readonly tuition = 7000;

  constructor(private router: Router, public roleService: RoleService, private http: HttpClient) {}

  ngOnInit(): void {
    this.role = this.roleService.getRole();
    if (this.role == "FACULTY"){
      this.http.get<Student[]>(this.apiUrl+'getStudentList')
      .subscribe(response => {
        this.studentList = response;
      })

    } else if (this.role == "STUDENT"){
      if (this.roleService.getId() != null) {
        this.id = this.roleService.getId() ?? '0';
      }
      const params = new HttpParams().set('id', this.id)  
      this.http.get<Student>(this.apiUrl+'getStudent', { params })
      .subscribe(response => {
        this.student = response;
      })
    }
  }

  backupStudent: Student | null = null;
  toggleEdit() {
    if(!this.isEditing) {
      // Store a copy before editing
      this.backupStudent = { ...this.student };
      this.isEditing = true;
    } else {
      // cancel button restores backup
      if (this.backupStudent) {
        this.student = { ...this.backupStudent };
      }
      this.isEditing = false;
    }
  }

  onSave() {
    //This basically just gets rid of any characters not allowed when editing info like /n or space
    this.student.email = this.student.email.trim().toLowerCase();
    this.student.address = this.student.address.trim();
    this.student.phone = this.student.phone.replace(/\D/g, '');
    this.student.firstName = this.student.firstName.trim();
    this.student.lastName = this.student.lastName.trim();
    
    let url = this.apiUrl;
    if (this.role === 'FACULTY') {
      // Faculty editing
      const facultyEmail = localStorage.getItem('userEmail') || 'unknown@uwec.edu';
      url += `facultyUpdateStudent?facultyEmail=${facultyEmail}`;
    } else {
      // Student editing
      url += 'updateStudent';
    }

    this.http.post(url, this.student, { observe: 'response', responseType: 'text' })
      .subscribe({
        next: (res) => {
          if (res.status === 200) {
            alert(res.body);
            this.isEditing = false;
            if (this.role === 'FACULTY') {
              this.router.navigate(['/student-list']);
            } else {
              this.loadStudent();
              this.router.navigate(['/student-information']);
            }
          } else {
            alert('Unexpected response: ' + res.statusText);
          }
        },
        error: (err) => {
          const msg = err.error ? err.error : 'Update failed.';
          alert(msg);
        }
      }
    );
  }

  loadStudent() {
    if (this.roleService.getId() != null) {
      this.id = this.roleService.getId() ?? '0';
    }
    const params = new HttpParams().set('id', this.id);
    this.http.get<Student>(this.apiUrl + "getStudent", { params })
      .subscribe({
        next: (data) => { this.student = data; },
        error: (err) => { console.error("Failed to load student:", err); }
      }
    );
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/student-login']);
  }
  
  selectStudent(newStudent: Student) {
    this.student = newStudent;
    this.isEditing = true;
  }

  chargeTuition(){
    this.student.balance = this.student.balance - this.tuition;
  }

  isValidPhone = true;
  validatePhone(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.student.phone = input.value;
    this.isValidPhone = /^\d{10}$/.test(this.student.phone);
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

}