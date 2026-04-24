import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngIf için şart!
import { RouterModule } from '@angular/router'; // routerLink için şart!
import { RestService } from '../../model/rest';

@Component({
  selector: 'app-navbar',
  standalone: true, // Standalone olduğunu belirtelim
  imports: [CommonModule, RouterModule], // ARAÇLARI BURAYA EKLEDİK
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor() { } 

  // Anahtarın olup olmadığını kontrol eden "akıllı" bir özellik
  get isLoggedIn(): boolean {
    return RestService.token !== null;
  }

  logout() {
    RestService.token = null; 
    localStorage.clear(); 
    window.location.href = "/shop"; 
  }
}