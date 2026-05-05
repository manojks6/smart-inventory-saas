import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = `${environment.apiUrl}/inventory`;

  constructor(private http: HttpClient) {}

  getWarehouses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/warehouses`);
  }

  createWarehouse(warehouseData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/warehouses`, warehouseData);
  }

  updateStock(adjustment: { productId: string, warehouseId: string, quantity: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/stock-adjust`, adjustment);
  }

  getInventoryByProduct(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product/${productId}`);
  }
}
