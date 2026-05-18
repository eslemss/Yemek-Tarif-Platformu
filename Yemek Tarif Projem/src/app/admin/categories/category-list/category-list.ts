import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRepository } from '../../../model/category.repository';
import { Category } from '../../../model/categories.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryListComponent implements OnInit {
  
  constructor(private repository: CategoryRepository) {}

  ngOnInit(): void { }

  get categories(): Category[] {
    return this.repository.getCategories();
  }

  // 🚀 DÜZELTME: Parametreyi 'id: number' yerine 'category: Category' yaptık.
  // Repository bizden tüm objeyi istediği için hata alıyordun.
  deleteCategory(category: Category) {
    if (confirm(`${category.name} kategorisini silmek istediğinizden emin misiniz?`)) {
      
      // Artık direkt objeyi gönderiyoruz, TypeScript hatası (2559) çözüldü.
      this.repository.deleteCategory(category);
      
      console.log(`${category.name} silindi.`);
    }
  }
}