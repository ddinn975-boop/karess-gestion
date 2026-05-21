import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonLivraisonService {
  private apiUrl = 'karess-backend-production-6a64.up.railway.app/api/bl';

  constructor(private http: HttpClient) { }

  // Envoie le FormData (JSON + Image) au Backend Java
  saveBL(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, formData);
  }

  // Pour générer le PDF plus tard
  downloadPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf/${id}`, { responseType: 'blob' });
  }
}