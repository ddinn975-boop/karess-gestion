import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from '../models/devis.model';

@Injectable({ providedIn: 'root' })
export class DevisService {
  private apiUrl = 'https://karess-backend-production.up.railway.app/api/devis';

  constructor(private http: HttpClient) { }

  /**
   * Modifié pour accepter FormData au lieu de l'objet Devis.
   * Le FormData permet d'envoyer le fichier image (cachet) et le JSON.
   */
  saveDevis(formData: FormData): Observable<Devis> {
    // Note : On ne définit pas de Header 'Content-Type'. 
    // HttpClient le fait automatiquement pour le multipart/form-data.
    return this.http.post<Devis>(`${this.apiUrl}/save`, formData);
  }

  downloadDevisPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf/${id}`, { responseType: 'blob' });
  }
}