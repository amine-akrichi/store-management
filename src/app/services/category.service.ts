import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _baseUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get<any>(this._baseUrl);
  }
}
