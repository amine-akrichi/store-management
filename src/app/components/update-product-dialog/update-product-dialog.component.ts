import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';
import { Product } from '../../pages/products-page/products-page.component';

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrl: './update-product-dialog.component.css'
})
export class UpdateProductDialogComponent {
  categoryList: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.data.category ={
      id: this.data.categoryId
    }
    this._categoryService.getCategories().subscribe
    (
      (res) => {
        this.categoryList = res as any[];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
