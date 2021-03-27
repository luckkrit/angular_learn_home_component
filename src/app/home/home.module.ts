import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    CategorymenuComponent,
    NavbarComponent,
    TopbannerComponent,
    SearchbarComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    TopbannerComponent,
    SearchbarComponent,
    CategorymenuComponent,
  ],
})
export class HomeModule {}
