import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html',
  imports: [NgIf, NgFor],
  styleUrls: ['logs.component.css'] 
})

//logs for displaying database changes and timestamps

export class LogsComponent {
    array: Array<Number> = [1,2,3,4]
    check: boolean = true;
}