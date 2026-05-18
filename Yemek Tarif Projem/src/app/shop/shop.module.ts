import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component'; // Yol doğru mu kontrol et

@NgModule({
  imports: [
    CommonModule,
    ShopComponent // STANDALONE OLDUĞU İÇİN BURAYA YAZDIK
  ],
  // declarations: [ShopComponent], <--- BURAYI SİLDİĞİNDEN EMİN OL!
  exports: [ShopComponent]
})
export class ShopModule { }