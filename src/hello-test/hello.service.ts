import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//This is the service used to grab data from the back end. in angular services are used to
//grab and control data and it is good practice to use services for data changes instead of doing the
//work in the actual component. this is a very basic example.
export class HelloService {
  private apiUrl = 'http://localhost:8080/api/hello';

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
