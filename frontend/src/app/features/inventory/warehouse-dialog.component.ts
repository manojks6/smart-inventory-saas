import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InventoryService } from '../../core/services/inventory.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-warehouse-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './warehouse-dialog.component.html',
  styles: [`
    .dialog-form { display: flex; flex-direction: column; gap: 8px; }
    mat-dialog-content { overflow: visible !important; }
  `]
})
export class WarehouseDialogComponent {
  warehouseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private dialogRef: MatDialogRef<WarehouseDialogComponent>
  ) {
    this.warehouseForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.warehouseForm.valid) {
      this.inventoryService.createWarehouse(this.warehouseForm.value).subscribe({
        next: (wh) => this.dialogRef.close(wh),
        error: (err) => console.error('Error saving warehouse', err)
      });
    }
  }
}
