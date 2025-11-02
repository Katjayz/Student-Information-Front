import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgIf],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('my-angular-app');
  constructor(public roleService: RoleService) {}
}
