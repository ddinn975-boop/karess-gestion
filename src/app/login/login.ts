import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ضروري باش يخدم NgModel وسط الفورم
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // ردينها Standalone حيت السيت ديالك كلو خدام هكا
  imports: [CommonModule, FormsModule, HttpClientModule], // زدنا هادو باش الـ HTML يقرأ الفورم
  templateUrl: './login.html',
  styleUrls: ['./login.css']   
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post('https://karess--production.up.railway.app/api/auth/login', this.credentials)
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']); 
        },
        error: (err) => {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect !';
        }
      });
  }
}