import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule, Router, NavigationEnd } from "@angular/router"; 
import { RestService } from "../model/rest"; 
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  currentRouteName: string = 'Yönetim Paneli';

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    // Sayfa her değiştiğinde başlığı otomatik güncelle
    this.updateTitle();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  private updateTitle() {
    const url = this.router.url;
    if (url.includes('categories')) {
      this.currentRouteName = 'Kategoriler';
    } else if (url.includes('recipes')) {
      this.currentRouteName = 'Tarifler';
    } else {
      this.currentRouteName = 'Dashboard';
    }
  }

  logout() {
    // 1. Token'ı temizle
    this.rest.token = null; 
    
    // 2. LocalStorage kullanıyorsan onu da temizle (opsiyonel ama önerilir)
    localStorage.removeItem("token");
    
    // 3. Kullanıcıyı yönlendir
    this.router.navigateByUrl('/shop'); 
    
    console.log("Güvenli çıkış yapıldı. Görüşürüz Ayşe Eslem! (˶ᵔ ᵕ ᵔ˵)");
  }
}