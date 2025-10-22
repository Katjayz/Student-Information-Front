import { Routes } from '@angular/router';
import { LoginComponent } from '../login-component/login.component';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { TestComponent } from '../hello-test/hello.component';
import { AddStudentComponent } from '../add-student-component/add-student.component';
import { LogsComponent } from '../logs-component/logs.component';

export const routes: Routes = [
      { path: '', component: LoginComponent },
      { path: 'studentInformation', component: StudentInformationComponent},
      { path: 'test', component: TestComponent},
      { path: 'addStudent', component: AddStudentComponent},
      { path: 'logs', component: LogsComponent},
];
