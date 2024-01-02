import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../../components/add-category-dialog/add-category-dialog.component';
import { UpdateCategoryDialogComponent } from '../../components/update-category-dialog/update-category-dialog.component';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css',
})
export class CategoriesPageComponent {
  private _categoriesTableData: Category[] = [];
  constructor(
    private _categoryService: CategoryService,
    private matdialog: MatDialog
  ) {}
  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'actions'];
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

  openAddCategoryDialog() {
    const dialogRef = this.matdialog.open(AddCategoryDialogComponent, {
      width: '300px',
      data: {},
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res && res.name) {
          this._categoryService.addCategory(res).subscribe(
            (res) => {
              this.ngOnInit();
            },
            (err) => {
              console.log(err);
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCategory(id: number) {
    this._categoryService.deleteCategory(id).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCategory(category: any) {
    const dialogRef = this.matdialog.open(UpdateCategoryDialogComponent, {
      width: '300px',
      data: category,
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res && res.name) {
          res.products = null;
          this._categoryService.updateCategory(res).subscribe(
            (res) => {
              this.ngOnInit();
            },
            (err) => {
              console.log(err);
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export interface Category {
  id: number;
  name: string;
}
