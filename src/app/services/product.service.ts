import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _baseUrl = 'http://localhost:8080/api/v1/products';
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get(this._baseUrl);
  }

  addProduct(product: any) {
    return this._http.post(this._baseUrl, product);
  }

  updateProduct(product: any) {
    return this._http.put(this._baseUrl + '/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this._http.delete(this._baseUrl + '/' + id);
  }

  getProductById(id: number) {
    return this._http.get(this._baseUrl + '/' + id);
  }
}
