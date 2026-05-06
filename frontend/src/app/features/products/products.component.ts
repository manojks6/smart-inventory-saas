import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../core/services/products.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ProductDialogComponent } from './product-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products = signal<any[]>([]);
  displayedColumns: string[] = ['name', 'sku', 'price', 'stock', 'actions'];

  constructor(private productsService: ProductsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error loading products', err)
    });
  }

  addProduct(): void {
    this.openProductDialog();
  }

  editProduct(product: any): void {
    this.openProductDialog(product);
  }

  private openProductDialog(product?: any): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '500px',
      maxWidth: '95vw',
      disableClose: true,
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProducts();
      }
    });
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }
}
