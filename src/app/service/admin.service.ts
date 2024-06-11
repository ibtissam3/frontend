import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';// Assurez-vous que le modèle Agent est correctement importé
import { Agent } from '../modals/agent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  createAgent(agent: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-agent`, agent);
  }

  deleteAgent(agent: any): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/delete-agent`, agent);
  }
}