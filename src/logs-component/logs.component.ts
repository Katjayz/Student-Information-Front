import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


interface LogEntry {
  editor: string;
  target: string;
  field: string;
  before: string;
  after: string;
  time: string;
}

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html',
  imports: [NgIf, NgFor, CommonModule],
  standalone: true
})

//logs for displaying database changes and timestamps

export class LogsComponent {
  // Sample log data for now — this can later be replaced with data from the backend
  logs: LogEntry[] = [
    {
      editor: 'Faculty1',
      target: 'Student1',
      field: 'GPA',
      before: '3.1',
      after: '3.5',
      time: '2025-10-20 14:45'
    },
    {
      editor: 'Admin',
      target: 'Student2',
      field: 'Balance',
      before: '$500.00',
      after: '$0.00',
      time: '2025-10-19 09:12'
    }
  ];
}