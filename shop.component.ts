import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // routerLink hatasını siler
import { Observable } from 'rxjs'; 
import { Recipe } from '../model/recipe.model'; 
import { Category } from '../model/categories.model'; // Category modelini eklemeyi unutma
import { RestService } from '../model/rest';
import { Navbar } from './navbar/navbar'; 

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar], // RouterModule burada şart!
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  // --- HTML'nin Beklediği Tüm Değişkenler ---
  public allRecipes: Recipe[] = []; 
  public categories: Category[] = [];
  public selectedCategory: Category | null = null;
  public selectedPage = 1;
  public recipesPerPage = 6; 

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Tarifler ve Kategoriler aynı anda çekiliyor
    this.restService.getRecipes().subscribe(data => this.allRecipes = data);
    this.restService.getCategories().subscribe(data => this.categories = data);
  }

  // --- HTML'deki (click) Olayları İçin Metotlar ---

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory || null;
    this.selectedPage = 1; 
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  // --- HTML'deki {{ }} Alanları İçin Dinamik Hesaplamalar (Getters) ---

get totalRecipeCount(): number {
  return this.allRecipes.filter(r => 
    // 🚀 Her iki tarafı String yaparak 'overlap' (örtüşme) hatasını bitiriyoruz
    this.selectedCategory == null || String(r.categoryId) === String(this.selectedCategory.id)
  ).length;
}
  get pageNumbers(): number[] {
    const pages = Math.ceil(this.totalRecipeCount / this.recipesPerPage);
    return Array(pages).fill(0).map((x, i) => i + 1);
  }

// HTML'deki @for döngüsünün asıl kullanacağı liste:
get recipes(): Recipe[] {
  let index = (this.selectedPage - 1) * this.recipesPerPage;
  return this.allRecipes
    .filter(r => 
      // 🚀 Tip uyuşmazlığını gidermek için her iki tarafı String'e zorluyoruz
      this.selectedCategory == null || String(r.categoryId) === String(this.selectedCategory.id)
    )
    .slice(index, index + this.recipesPerPage);
}
}