import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { HttpClient, HttpParams } from '@angular/common/http';

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
        console.log(this.studentList)
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

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSave() {
    this.http.post(this.apiUrl + "updateStudent", this.student).subscribe()
    console.log('Saved student info:', this.student);
    alert('Information saved successfully!');
    this.isEditing = false;
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
}