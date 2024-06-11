import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialReport } from '../modals/financial-report';
import {Transaction} from "../modals/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getFinancialReport(): Observable<FinancialReport> {
    return this.http.get<FinancialReport>(`${this.apiUrl}/transactions/report`);
  }

  // Méthode pour récupérer les transactions du client professionnel connecté
  getProfessionalClientTransactions(clientId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions/professional/${clientId}`);
  }
}
