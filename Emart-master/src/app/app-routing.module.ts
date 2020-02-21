import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ElectronicsComponent } from './sub-category/electronics/electronics.component';
import { FashionComponent } from './sub-category/fashion/fashion.component';
import { GroceriesComponent } from './sub-category/groceries/groceries.component';



  const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'list',component:ProductComponent},
    {path:'add',component:ProductComponent},
    {path:'details/:id',component:ProductComponent},
    {path:'newuser',component:SignUpComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'Click',component:ProductComponent},
    {path:'sel',component:CategoryComponent},
    {path:'Select',component:SubCategoryComponent},
    {path:'Clk',component:ElectronicsComponent},
    {path:'Cls',component:FashionComponent},
    {path:'dis',component:ProductComponent},
    {path:'Cll',component:ProductComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
