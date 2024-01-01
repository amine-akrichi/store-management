import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'products', component: ProductsPageComponent },
      { path: 'categories', component: CategoriesPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
