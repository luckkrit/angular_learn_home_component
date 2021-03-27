import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { NavbarComponent } from './home/navbar/navbar.component';
// import { SearchbarComponent } from './home/navbar/searchbar/searchbar.component';
// import { TopbannerComponent } from './home/topbanner/topbanner.component';
// import { CategorymenuComponent } from './home/categorymenu/categorymenu.component';
// import { TodolistComponent } from './todolist/todolist.component';
// import { SwiftviewComponent } from './swiftview/swiftview.component';
// import { ExamplecomponentComponent } from './examplecomponent/examplecomponent.component';
// import { ProductComponent } from './product/product.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { ProductItemComponent } from './product/product-item/product-item.component';
// import { TaskComponent } from './todolist/task/task.component';
import { BackendService } from './backend.service';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { routes } from './Routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // CountingComponent,
    // Lab4Component,
    HomeComponent,
    // NavbarComponent,
    // SearchbarComponent,
    // TopbannerComponent,
    // CategorymenuComponent,
    // TodolistComponent,
    // SwiftviewComponent,
    // ExamplecomponentComponent,
    // ProductComponent,
    // ProductListComponent,
    // ProductItemComponent,
    // TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    CatalogModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
