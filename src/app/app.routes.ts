import { Routes } from '@angular/router';
import { LoginComponent } from '../student-login-component/login.component';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { TestComponent } from '../hello-test/hello.component';
import { AddStudentComponent } from '../add-student-component/add-student.component';
import { LogsComponent } from '../logs-component/logs.component';
import { FacultyLoginComponent } from '../faculty-login-component/faculty-login.component';
import { StudentOrFacultyGuard } from '../guards/student-or-faculty.guard';
import { FacultyGuard } from '../guards/faculty.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'student-login', pathMatch: 'full' },
  { path: 'student-login', component: LoginComponent },
  { path: 'student-list', component: StudentInformationComponent, canActivate: [StudentOrFacultyGuard] },
  { path: 'test', component: TestComponent },
  { path: 'add-student', component: AddStudentComponent, canActivate: [FacultyGuard]  },
  { path: 'logs', component: LogsComponent, canActivate: [StudentOrFacultyGuard]  },
  { path: 'faculty-login', component: FacultyLoginComponent },
];
