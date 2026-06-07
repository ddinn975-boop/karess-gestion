import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // زدنا Router هنا

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit { // زدنا implements OnInit

  // درنا الـ Injection للـ Router وسط الـ Constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
    // كنشوفو واش كاين كائن (Object) سميتو 'user' في الـ LocalStorage
    const connectedUser = localStorage.getItem('user');
    
    // يلا مالقاش الـ user، كيرجعو بزز لصفحة الـ login ومكخليهش يشوف الـ Dashboard
    if (!connectedUser) {
      this.router.navigate(['/login']);
    }
  }
}