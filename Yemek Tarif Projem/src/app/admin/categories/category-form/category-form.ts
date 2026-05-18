import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../model/categories.model';
import { CategoryRepository } from '../../../model/category.repository';
@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-form.html'
})
export class CategoryFormComponent {
  editing: boolean = false;
  category: Category = new Category();

 // category-form.ts
constructor(
  private repository: CategoryRepository,
  private router: Router,
  private activeRoute: ActivatedRoute
) {
  // 1. Düzenleme modunda mıyız? (URL'de 'edit' yazıyor mu?)
  this.editing = activeRoute.snapshot.params["mode"] == "edit";

  if (this.editing) {
    const id = activeRoute.snapshot.params["id"];
    
    // 2. Depodan (Repository) o kategoriyi bulalım
    const foundCategory = this.repository.getCategory(id);
    
    if (foundCategory) {
      // 🚀 İŞTE EN KRİTİK SATIR: 
      // Sadece ismini değil, {id: 1, name: "Çorba"} şeklinde tüm kimliğini kopyalıyoruz!
      this.category = { ...foundCategory }; 
    }
  }
}
save(form: NgForm) {
  if (form.valid) {
    // Verileri bozmadan kopyalıyoruz
    const categoryData = { ...this.category };

    // 1. STRING GÜVENLİĞİ: İsmin string olduğundan emin oluyoruz
    categoryData.name = String(categoryData.name).trim();

    // 2. INT GÜVENLİĞİ: ID'nin sayısal olduğundan emin oluyoruz
    if (this.editing) {
      // URL'deki ID'yi al ve NUMBER (int) yap
      const urlId = this.activeRoute.snapshot.params["id"];
      categoryData.id = Number(urlId);
      
      this.repository.saveCategory(categoryData);
    } else {
      // Yeni kayıtta ID'yi siliyoruz ki json-server otomatik INT id versin
      delete (categoryData as any).id;
      this.repository.saveCategory(categoryData);
    }

    // İşlem başarılı mesajı ve yönlendirme
    setTimeout(() => {
      this.router.navigateByUrl("/admin/main/categories");
    }, 200);
  }
}
} 