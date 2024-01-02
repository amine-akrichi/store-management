import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../../components/add-product-dialog/add-product-dialog.component';
import { UpdateProductDialogComponent } from '../../components/update-product-dialog/update-product-dialog.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  private _productsTableData: Product[] = [];
  constructor(private _productService: ProductService, private matdialog:MatDialog) {}
  dataSource = new MatTableDataSource<Product>();
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'quantity',
    'category',
    'actions',
  ];
  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (res) => {
        this._productsTableData = res as Product[];
        console.log(this._productsTableData);
        this.dataSource = new MatTableDataSource<Product>(
          this._productsTableData
        );
        this.dataSource.paginator = this.paginator;
      },
      (err) => console.log(err)
    );
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  openAddProductDialog() {
    const dialogRef = this.matdialog.open(AddProductDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container',
      data: {},
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res && res.name) {
          this._productService.addProduct(res).subscribe(
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

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateProduct(product: any) {
    const dialogRef = this.matdialog.open(UpdateProductDialogComponent, {
      width: '500px',
      panelClass: 'custom-dialog-container',
      data: product,
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res && res.name) {
          this._productService.updateProduct(res).subscribe(
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

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: {
    id: number;
  };
}
