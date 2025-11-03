import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  password?: string;
  gpa?: number;
  credits?: number;
  balance?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  // Get a student by ID
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // Update a student
  updateStudent(id: number, student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }
}
