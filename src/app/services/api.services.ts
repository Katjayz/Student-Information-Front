import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // Spring Boot base URL

  constructor(private http: HttpClient) {}

  // Test connection
  getHello(): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello`, { responseType: 'text' });
  }

  // Example: login API (we’ll wire this up later)
  studentLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/student/login`, { email, password });
  }
}
