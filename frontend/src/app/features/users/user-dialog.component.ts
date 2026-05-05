import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user-dialog.component.html',
  styles: [`
    .dialog-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .w-100 {
      width: 100%;
    }
    mat-form-field {
      width: 100%;
    }
    .row {
      display: flex;
      gap: 16px;
      margin-bottom: 8px;
    }
    .col {
      flex: 1;
    }
    mat-dialog-content {
      overflow: visible !important;
    }
  `]
})
export class UserDialogComponent {
  userForm: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = !!data;
    this.userForm = this.fb.group({
      firstName: [data?.firstName || '', [Validators.required]],
      lastName: [data?.lastName || '', [Validators.required]],
      email: [data?.email || '', [Validators.required, Validators.email]],
      password: ['', this.isEdit ? [] : [Validators.required, Validators.minLength(6)]],
      userRole: [data?.role || 'STAFF', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.usersService.createUser(this.userForm.value).subscribe({
        next: (user) => this.dialogRef.close(user),
        error: (err) => console.error('Error saving user', err)
      });
    }
  }
}
