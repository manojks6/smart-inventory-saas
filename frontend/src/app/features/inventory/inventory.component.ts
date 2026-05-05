import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../core/services/inventory.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { WarehouseDialogComponent } from './warehouse-dialog.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './inventory.component.html'
})
export class InventoryComponent implements OnInit {
  warehouses = signal<any[]>([]);
  displayedColumns: string[] = ['name', 'location', 'status', 'actions'];

  constructor(private inventoryService: InventoryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.inventoryService.getWarehouses().subscribe({
      next: (data) => this.warehouses.set(data),
      error: (err) => console.error('Error loading warehouses', err)
    });
  }

  addWarehouse(): void {
    const dialogRef = this.dialog.open(WarehouseDialogComponent, {
      width: '500px',
      maxWidth: '95vw',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadWarehouses();
      }
    });
  }
}
