import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

interface LogEntry {
  user_email: string;
  role: string;
  action: string;
  status: string;
  message: string;
  created_at: string;
}

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html',
  imports: [NgFor, CommonModule],
  standalone: true
})
export class LogsComponent implements OnInit {

  logs: LogEntry[] = [];

  // HttpClient lets you make GET requests to the backend.
  constructor(private http: HttpClient) {}

  // ngOnInit runs automatically when the page loads.
  ngOnInit(): void {
    this.http.get<LogEntry[]>('http://localhost:8080/api/logs').subscribe((data) => {
      // Stores the data you get from the backend into the logs array.
      this.logs = data;
    });
  }
}