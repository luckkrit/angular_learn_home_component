import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { BackendService } from '../backend.service';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductItemComponent],
  imports: [CommonModule],
  providers: [BackendService],
  exports: [ProductComponent],
})
export class CatalogModule {}
