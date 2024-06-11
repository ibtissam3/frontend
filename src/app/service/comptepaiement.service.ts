import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComptePaiement } from '../modals/comptePaiement';
import { PaymentAccountCreationRequest } from '../modals/paymentaccountcreactionrequest';


@Injectable({
  providedIn: 'root'
})
export class ComptePaiementService {
  private apiUrl = 'http://localhost:8080/api/payment-accounts'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAll(): Observable<ComptePaiement[]> {
    return this.http.get<ComptePaiement[]>(this.apiUrl);
  }

  createComptePaiement(request: PaymentAccountCreationRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, request);
  }

  updateComptePaiement(id: number, updatedAccount: ComptePaiement): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedAccount);
  }

  getAccountBalance(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/balance`);
  }

  deleteComptePaiement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}