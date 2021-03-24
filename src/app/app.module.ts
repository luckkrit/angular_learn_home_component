import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchbarComponent } from './home/navbar/searchbar/searchbar.component';
import { TopbannerComponent } from './home/topbanner/topbanner.component';
import { CategorymenuComponent } from './home/categorymenu/categorymenu.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingComponent,
    Lab4Component,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    TopbannerComponent,
    CategorymenuComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
