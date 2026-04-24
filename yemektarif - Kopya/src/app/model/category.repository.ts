import { Injectable } from '@angular/core';
import { Category } from './categories.model'; 
import { RestService } from './rest'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.refreshCategories();
  }

  refreshCategories() {
    this.restService.getCategories().subscribe(data => {
      this.categories = data;
      console.log("Kategoriler yüklendi:", this.categories);
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  // 🛠 DÜZELTME 1: Tip zorlamasını kaldırıyoruz (== kullanarak hem string hem number eşleşir)
  getCategory(id: any): Category | undefined {
    return this.categories.find(c => c.id == id);
  }

  saveCategory(category: Category) {
    // ID yoksa yeni kayıttır
    const isNew = category.id === undefined || category.id === null || category.id === 0;

    if (isNew) {
      const newCategory = { ...category };
      delete (newCategory as any).id;

      this.restService.saveCategory(newCategory).subscribe(() => {
        this.refreshCategories();
        alert(`${newCategory.name} başarıyla eklendi!`);
      });

    } else {
      // 🛠 DÜZELTME 2: Güncelleme yaparken ID'yi Number yapma 
      // Çünkü string bir ID'yi (UUID) number yaparsan veri bozulur
      this.restService.updateCategory(category).subscribe(() => {
        this.refreshCategories();
        alert("Güncelleme başarılı!");
      });
    }
  }

  // 🛠 DÜZELTME 3: Silme işlemindeki kritik hata burasıydı
  deleteCategory(category: Category) {
    // Number() zorlamasını sildik, ID'yi olduğu gibi alıyoruz
    const id = category.id;

    // ID null, undefined veya boş değilse silme isteği at
    if (id !== undefined && id !== null) {
      this.restService.deleteCategory(id).subscribe({
        next: () => {
          this.refreshCategories();
          alert("Kategori başarıyla silindi!");
        },
        error: (err) => {
          console.error("Silme hatası:", err);
          this.refreshCategories();
        }
      });
    }
  }
}