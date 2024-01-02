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

  getCategoryById(id: number) {
    return this._http.get<any>(this._baseUrl + '/' + id);
  }

  addCategory(category: any) {
    return this._http.post<any>(this._baseUrl, category);
  }

  updateCategory(category: any) {
    return this._http.put<any>(this._baseUrl + '/' + category.id, category);
  }

  deleteCategory(id: number) {
    return this._http.delete<any>(this._baseUrl + '/' + id);
  }


}
