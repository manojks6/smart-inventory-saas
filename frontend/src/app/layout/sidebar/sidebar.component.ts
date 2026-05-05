import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './sidebar.component.html',
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    .mat-mdc-list-item {
      margin: 4px 8px;
      border-radius: 8px;
    }
  `]
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  get isAdmin(): boolean {
    return this.authService.currentUser()?.role === 'ADMIN';
  }
}
