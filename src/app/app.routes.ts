import { Routes } from '@angular/router';
import { LoginComponent } from '../student-login-component/login.component';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { TestComponent } from '../hello-test/hello.component';
import { AddStudentComponent } from '../add-student-component/add-student.component';
import { LogsComponent } from '../logs-component/logs.component';
import { FacultyLoginComponent } from '../faculty-login-component/faculty-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'student-login', pathMatch: 'full' },
  { path: 'student-login', component: LoginComponent },
  { path: 'student-list', component: StudentInformationComponent },
  { path: 'test', component: TestComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
];
