import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RestService } from '../model/rest';

export const authGuard: CanActivateFn = (route, state) => {
  const restService = inject(RestService);
  const router = inject(Router);

  // KONSOLDA GÖRELİM: F12'ye basınca bu mesajı aramalıyız
  console.log("👮 Nöbetçi: Token Kontrol Ediliyor...", restService.token);

  if (restService.token != null) {
    console.log("✅ Nöbetçi: Anahtar geçerli, içeri gir!");
    return true; 
  } else {
    console.log("❌ Nöbetçi: Anahtar YOK! Giriş sayfasına geri gönderiyorum.");
    // BURAYI /shop YERİNE /admin/auth YAP:
    router.navigateByUrl('/admin/auth'); 
    return false;
  }
};