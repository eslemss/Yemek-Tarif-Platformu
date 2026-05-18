import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RestService } from './rest'; 
import { Category } from './categories.model';
import { Observable } from 'rxjs'; // Observable için bu import gerekli

@Injectable({
  providedIn: 'root'
})
export class RecipeRepository implements OnInit {
  private recipes: Recipe[] = [];
  private ingredients: any[] = []; 

  constructor(private restService: RestService) {
    // 1. Tarifler listesini başlangıçta çekiyoruz
    this.restService.getRecipes().subscribe(recipes => this.recipes = recipes);
    
    // 2. Malzemeler listesini başlangıçta çekiyoruz
    this.restService.getIngredients().subscribe((ing: any[]) => {
      this.ingredients = ing;
    });
  }

  ngOnInit() {}

  // --- KRİTİK METOT: Detay sayfasında veriyi servisten taze çekmek için ---
  getRecipesFromService(): Observable<Recipe[]> {
    return this.restService.getRecipes();
  }

  // Mevcut listeden hızlıca ID ile tarif bulmak için
  getRecipe(id: number): Recipe | undefined {
    return this.recipes.find((i: Recipe) => i.id == id); // == kullanarak tip esnekliği sağladık
  }

  // Tarife ait malzemeleri filtrelemek için
  getIngredientsByRecipeId(recipeId: number) {
    return this.ingredients.filter((i: any) => i.recipeId == recipeId);
  }

  // Kategorilere göre tarifleri getirmek için
  getRecipes(category: Category | null = null): Recipe[] {
    if (category) {
// recipe.repository.ts içindeki 44. satırı şu şekilde güncelleyin:
return this.recipes.filter(r => String(r.categoryId) === String(category.id));
    } else { 
      return this.recipes;
    }
  }
}