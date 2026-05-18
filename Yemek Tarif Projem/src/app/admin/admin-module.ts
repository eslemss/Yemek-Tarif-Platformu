import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing-module';
import { AuthComponent } from './auth/auth'; 
import { AdminComponent } from './admin.component';
import { RecipesForm } from './recipes/recipes-form/recipes-form';
import { RecipesList } from './recipes/recipes-list/recipes-list';
import { CategoryFormComponent } from './categories/category-form/category-form';
import { CategoryListComponent } from './categories/category-list/category-list';

@NgModule({
  declarations: [], // Standalone mimari kullandığınız için burası boş kalmalı
  imports: [
    CommonModule, 
    AdminRoutingModule,
    FormsModule,
    // --- Standalone Bileşenler ---
    AuthComponent,
    AdminComponent,
    RecipesForm,
    RecipesList,
    CategoryFormComponent,
    CategoryListComponent
  ]
}) 
export class AdminModule {}