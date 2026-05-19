import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { FactureAddComponent } from './components/facture-add/facture-add';
import { BonLivraisonComponent } from './components/bon-livraison/bon-livraison';
import { DevisAddComponent } from './components/devis-add/devis-add';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'facture', component: FactureAddComponent },
  { path: 'bl', component: BonLivraisonComponent },
  
  // 1. Zid Devis HNA (9bel l-wildcard **)
  { path: 'devis-add', component: DevisAddComponent },
  
  // 2. L-wildcard (ay 7aja ma-baynach) khass t-kon hiya l-KHRYA dima
  { path: '**', redirectTo: '' }
];