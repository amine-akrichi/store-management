import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.css'
})
export class AddProductDialogComponent {
  categoryList: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.data.category = {
      id: 0,
    };
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
