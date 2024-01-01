import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  private _categoriesTableData: Category[] = [];
  constructor(private _categoryService: CategoryService) {}
  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = [
    'id',
    'name',
    'actions',
  ];
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe(
      (res) => {
        this._categoriesTableData = res as Category[];
        console.log(this._categoriesTableData);
        this.dataSource = new MatTableDataSource<Category>(
          this._categoriesTableData
        );
        this.dataSource.paginator = this.paginator;
        console.log(res);
        
      },
      (err) => console.log(err)
    );
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

}

export interface Category {
  id: number;
  name: string;
}