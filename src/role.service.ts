import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

//This is the service used to check user roles. We can use it in guards
//or to control what information is loaded on a page.
export class RoleService{
  
  private loginUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}
  private tokenKey = 'role_token';

  studentLogin(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post<{token: string; role: string} >(this.loginUrl + "studentLogin", null, {params});
  }

  facultyLogin(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post<{token: string; role: string} >(this.loginUrl + "facultyLogin", null, {params});
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getRole(): string | null {
    if (typeof window != 'undefined') { 
      const token =localStorage.getItem(this.tokenKey);
      if (!token){
        return null;
      }
      const decoded: any = jwtDecode(token);
      return decoded?.role||null;
    } else {
      return null;
    }
    
  }
}
