import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../modals/bank';


@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = '/banks'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiUrl);
  }

  getBankById(id: number): Observable<Bank> {
    return this.http.get<Bank>(`${this.apiUrl}/${id}`);
  }

  createBank(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.apiUrl, bank);
  }

  updateBank(id: number, bankDetails: Bank): Observable<Bank> {
    return this.http.put<Bank>(`${this.apiUrl}/${id}`, bankDetails);
  }

  deleteBank(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}