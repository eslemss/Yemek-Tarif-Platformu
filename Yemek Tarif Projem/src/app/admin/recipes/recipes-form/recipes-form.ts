import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestService } from '../../../model/rest';
import { Recipe } from '../../../model/recipe.model';
import { Category } from '../../../model/categories.model';

@Component({
  selector: 'app-recipes-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipes-form.html',
  styleUrl: './recipes-form.css'
})
export class RecipesForm implements OnInit {
  editing: boolean = false;
  recipe: Recipe = {} as Recipe;
  categories: Category[] = [];

  // Textarea yönetimi için köprü değişkenler
  ingredientsText: string = "";
  instructionsText: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) { }

  ngOnInit() {
    // Kategorileri veritabanından çek
    this.restService.getCategories().subscribe(res => {
      this.categories = res;
    });

    // Mod (ekleme mi güncelleme mi) kontrolü
    this.editing = this.activatedRoute.snapshot.params["mode"] === "edit";

    if (this.editing) {
      const id = Number(this.activatedRoute.snapshot.params["id"]);
      
      this.restService.getRecipe(id).subscribe(data => {
        // Gelen verileri sayısal tipe zorlayarak modele ata
        this.recipe = {
          ...data,
          id: Number(data.id),
          categoryId: Number(data.categoryId),
          prepTime: Number(data.prepTime),
          servings: Number(data.servings)
        };
        
        // Dizi olan verileri textarea için alt alta metne çevir
        if (data.ingredients && Array.isArray(data.ingredients)) {
          this.ingredientsText = data.ingredients.join('\n');
        }
        
        if (data.instructions && Array.isArray(data.instructions)) {
          this.instructionsText = data.instructions.join('\n');
        }
      });
    }
  }

  save(form: NgForm) {
    if (form.valid) {
      // Orijinal objeyi bozmamak için kopyasını oluştur
      const recipeToSave: Recipe = { ...this.recipe };

      // 1. TİP GÜVENLİĞİ: Formdan ne gelirse gelsin NUMBER (int) yap
      recipeToSave.categoryId = Number(this.recipe.categoryId);
      recipeToSave.prepTime = Number(this.recipe.prepTime);
      recipeToSave.servings = Number(this.recipe.servings);
      
      // 2. DİZİ DÖNÜŞÜMÜ: Metni satır satır böl ve diziye çevir
      recipeToSave.ingredients = this.ingredientsText
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');

      recipeToSave.instructions = this.instructionsText
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');

      // 3. KAYIT VE GÜNCELLEME MANTIĞI
      if (this.editing) {
        // Güncelleme işlemi (PUT)
        recipeToSave.id = Number(this.activatedRoute.snapshot.params["id"]);
        this.restService.updateRecipe(recipeToSave).subscribe({
          next: () => this.router.navigateByUrl("/admin/main/recipes"),
          error: (err: any) => this.handleError(err)
        });
      } else {
        // Yeni Kayıt işlemi (POST)
        // ID'yi siliyoruz ki json-server otomatik integer ID atasın
        delete (recipeToSave as any).id;
        this.restService.saveRecipe(recipeToSave).subscribe({
          next: () => this.router.navigateByUrl("/admin/main/recipes"),
          error: (err: any) => this.handleError(err)
        });
      }
    }
  }

  private handleError(err: any) {
    console.error("Hata Detayı:", err);
    alert("İşlem sırasında bir hata oluştu. Lütfen verileri kontrol edin.");
  }
}