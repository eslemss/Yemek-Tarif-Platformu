import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; // Router ve NavigationEnd eklendi
import { Navbar } from './shop/navbar/navbar';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs'; // filter eklendi

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule], 
  template: `
   

    <router-outlet></router-outlet> 
  `
})
export class App {
  isAdminPage = false;

  constructor(private router: Router) {
    // Sayfa değişimlerini takip et
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Eğer url '/admin' içeriyorsa isAdminPage true olur
      this.isAdminPage = event.url.includes('/admin');
    });
  }
}