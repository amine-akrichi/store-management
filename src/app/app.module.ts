import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';
import { AddCategoryDialogComponent } from './components/add-category-dialog/add-category-dialog.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UpdateCategoryDialogComponent } from './components/update-category-dialog/update-category-dialog.component';
import { UpdateProductDialogComponent } from './components/update-product-dialog/update-product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductDialogComponent,
    AddCategoryDialogComponent,
    LayoutComponent,
    ProductsPageComponent,
    CategoriesPageComponent,
    DashboardPageComponent,
    UpdateCategoryDialogComponent,
    UpdateProductDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
