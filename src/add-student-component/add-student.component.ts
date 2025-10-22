import { Component } from '@angular/core';

//This is where the student information access will go

@Component({
  selector: 'app-add-student',
  templateUrl: 'add-student.component.html', 
  styleUrls: ['add-student.component.css'] 
})

export class AddStudentComponent {

    variable: string = " please add a student";
    variable2: boolean = true;

}