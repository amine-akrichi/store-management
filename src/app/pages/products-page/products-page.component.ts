import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  private _productsTableData: Product[] = [];
  constructor(private _productService: ProductService) {}
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

}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: number;
}
