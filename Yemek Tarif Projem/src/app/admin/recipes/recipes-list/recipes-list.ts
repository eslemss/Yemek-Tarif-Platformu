import { Component, OnInit } from '@angular/core'; // 1. OnInit ekledik
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestService } from '../../../model/rest';
import { Recipe } from '../../../model/recipe.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './recipes-list.html'
})
export class RecipesList implements OnInit { // 2. OnInit'i buraya ekledik

  // 3. Tariflerin duracağı boş bir kutu (dizi) hazırladık
  public recipes: Recipe[] = []; 
  searchText: string = "";
filteredRecipes: any[] = [];
// API'den veriler geldiğinde:
// this.recipes = data;
// this.filteredRecipes = data;

  constructor(private restService: RestService) { }
onSearch() {
  if (!this.searchText) {
    this.filteredRecipes = this.recipes;
  } else {
    this.filteredRecipes = this.recipes.filter(x => 
      // Soru işareti (?) ekleyerek "varsa çalıştır" diyoruz
      (x.name?.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (x.description?.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}

  ngOnInit() {
    // 4. Sayfa açıldığında paketi açıyoruz (Subscribe)
    this.loadRecipes();
  }

  loadRecipes() {
    this.restService.getRecipes().subscribe(data => {
      this.recipes = data; // Gelen tarifleri kutumuza koyduk
    });
  }

deleteRecipe(recipe: Recipe) {
  // 1. Kullanıcıdan onay al (Yanlışlıkla silmesin!)
  if (confirm(`${recipe.name} tarifini silmek istediğine emin misin?`)) {
    
    // 2. Servisteki metodu çağır
    this.restService.deleteRecipe(recipe.id!).subscribe({
      next: () => {
        // 3. Silme başarılıysa listeyi ekrandan da temizle
        alert("Tarif başarıyla silindi!");
        this.loadRecipes(); // Listeyi servisten tekrar çekip tazeler
      },
      error: (err) => {
        console.error("Silme hatası:", err);
        alert("Silme işlemi sırasında bir hata oluştu!");
      }
    });
  }
}
}