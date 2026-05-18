import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeRepository } from '../model/recipe.repository';
import { Recipe } from '../model/recipe.model';
import { Navbar } from '../shop/navbar/navbar';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-tarif-detail',
  standalone: true,
  // 🚀 Buradaki 'NavbarComponent' ismini de 'Navbar' yapıyoruz
  imports: [CommonModule, RouterModule, Navbar], 
  templateUrl: './tarif-detail.html',
  styleUrl: './tarif-detail.css'
})
export class TarifDetail implements OnInit {
  recipe: Recipe | undefined;
  ingredients: any[] = [];  

  constructor(
    private route: ActivatedRoute, 
    private repository: RecipeRepository,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // 🚀 ÖNEMLİ: ID'yi hem string hem number olarak kontrol etmek en güvenlisidir.
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : ""; // String olarak tutalım

    this.loadData(id);
  }
loadData(id: any) {
    this.repository.getRecipesFromService().subscribe({
      next: (allRecipes) => {
        this.recipe = allRecipes.find((r: Recipe) => String(r.id) === String(id));
        
        if (this.recipe) {
          this.ingredients = this.repository.getIngredientsByRecipeId(Number(this.recipe.id));
          
          // 🚀 3. KRİTİK DOKUNUŞ: Angular'a "Hadi ekranı yenile, veri geldi!" diyoruz
          this.cdr.detectChanges(); 
          
          console.log("🎯 Eşleşme başarılı ve ekran tetiklendi!");
        }
      }
    });
  }
}