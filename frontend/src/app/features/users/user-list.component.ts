import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../core/services/users.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { UserDialogComponent } from './user-dialog.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule
  ],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users = signal<any[]>([]);
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'actions'];

  constructor(private usersService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: (err) => console.error('Error loading users', err)
    });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '550px',
      maxWidth: '95vw',
      panelClass: 'premium-dialog',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers();
      }
    });
  }
}
