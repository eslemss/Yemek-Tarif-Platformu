import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { TarifDetail } from './tarif-detail/tarif-detail'; // 🚀 1. Bunu import etmeyi unutma!

export const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },

  // 🚀 2. EKSİK OLAN ROTA BURASI:
  // 'tarif/:id' -> Buradaki :id, hangi tarife gideceğimizi belirleyen değişkendir.
  { path: 'tarif/:id', component: TarifDetail },

  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) 
  },

  { path: '**', redirectTo: '/shop' }
];