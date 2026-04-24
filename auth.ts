import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

// İŞTE EKSİK OLAN SATIR BURASI:
import { RestService } from '../../model/rest'; 

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  // Constructor'da da ismini netleştirelim
  constructor(private router: Router, private restService: RestService) { }

  ngOnInit(): void { }
login(form: NgForm) { 
  if (form.valid) {
    this.restService.authentication(this.username, this.password).subscribe((isSuccess: boolean) => {
      if(isSuccess) {
        // BAŞARILIYSA BURAYA GİT:
        this.router.navigateByUrl('/admin/main'); 
      } else {
        this.errorMessage = 'Kullanıcı adı veya şifre hatalı!';
      }
    });
  }
}
}