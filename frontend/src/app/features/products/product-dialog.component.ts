import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../core/services/products.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-dialog',
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
  templateUrl: './product-dialog.component.html',
  styles: [`
    .dialog-form { display: flex; flex-direction: column; gap: 8px; }
    mat-dialog-content { overflow: visible !important; }
    .w-100 { width: 100%; }
  `]
})
export class ProductDialogComponent {
  productForm: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = !!data;
    this.productForm = this.fb.group({
      name: [data?.name || '', [Validators.required]],
      sku: [data?.sku || '', [Validators.required]],
      description: [data?.description || ''],
      price: [data?.price || 0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productsService.createProduct(this.productForm.value).subscribe({
        next: (product) => this.dialogRef.close(product),
        error: (err) => console.error('Error saving product', err)
      });
    }
  }
}
