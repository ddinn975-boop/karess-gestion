import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FactureAddComponent } from './components/facture-add/facture-add'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'karess-frontend';
}