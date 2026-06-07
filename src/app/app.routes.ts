import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { FactureAddComponent } from './components/facture-add/facture-add';
import { BonLivraisonComponent } from './components/bon-livraison/bon-livraison';
import { DevisAddComponent } from './components/devis-add/devis-add';
// الحل هنا: صححنا المسار وزدنا كلمة components
import { LoginComponent } from './login/login';
export const routes: Routes = [
  // 1. الصفحة الأولى للي كتحل في السيت تولي هي الـ login بزز
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // 2. باقي الصفحات والمسارات
  { path: 'dashboard', component: DashboardComponent },
  { path: 'facture', component: FactureAddComponent },
  { path: 'bl', component: BonLivraisonComponent },
  { path: 'devis-add', component: DevisAddComponent },
  
  // 3. الـ wildcard (أي حاجة غريبة ترجعنا للـ login)
  { path: '**', redirectTo: 'login' }
];