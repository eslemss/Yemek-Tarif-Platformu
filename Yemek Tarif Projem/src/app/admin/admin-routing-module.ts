import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Kendi dosya yapına göre import'u kontrol et:
import { AuthComponent } from './auth/auth'; 
import { AdminComponent } from './admin.component'; 
import { authGuard } from './auth-guard';
import { RecipesForm } from './recipes/recipes-form/recipes-form';
import { RecipesList } from './recipes/recipes-list/recipes-list';
import { CategoryFormComponent } from './categories/category-form/category-form';
import { CategoryListComponent } from './categories/category-list/category-list';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { 
    path: 'main', 
    component: AdminComponent, 
    canActivate: [authGuard],
    children: [
      // 📝 TARİF ROTALARI
      { path: 'recipes/:mode/:id', component: RecipesForm },
      { path: 'recipes/:mode', component: RecipesForm }, // 🚀 Sondaki '/' işaretini kaldırdık!
      { path: 'recipes', component: RecipesList },

      // 📁 KATEGORİ ROTALARI
      { path: 'categories/:mode/:id', component: CategoryFormComponent },
      { path: 'categories/:mode', component: CategoryFormComponent }, // 🚀 Burayı da düzelttik!
      { path: 'categories', component: CategoryListComponent },
      
      // Varsayılan olarak tariflere gitsin isterseniz:
      { path: '', redirectTo: 'recipes', pathMatch: 'full' }
    ]
  }, 
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}