import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    CategorymenuComponent,
    NavbarComponent,
    TopbannerComponent,
    MainContentComponentComponent,
    SearchbarComponent,
    LoginComponentComponent,
    PageNotFoundComponentComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    MainContentComponentComponent,
    TopbannerComponent,
    SearchbarComponent,
    CategorymenuComponent,
  ],
})
export class HomeModule {}
