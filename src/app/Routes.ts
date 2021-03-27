import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ProductListComponent } from './catalog/product/product-list/product-list.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalog/product/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
