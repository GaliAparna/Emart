import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { DiscountComponent } from './discount/discount.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './sub-category/electronics/electronics.component';
import { FashionComponent } from './sub-category/fashion/fashion.component';
import { GroceriesComponent } from './sub-category/groceries/groceries.component';
import { BeautyComponent } from './sub-category/beauty/beauty.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CategoryComponent,
    DiscountComponent,
    LoginComponent,
    SignUpComponent,
    SubCategoryComponent,
    
    ProductComponent,
    HomeComponent,
    ElectronicsComponent,
    FashionComponent,
    GroceriesComponent,
    BeautyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
