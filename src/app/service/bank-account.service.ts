import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';// Replace with the path to your BankAccount model
import { BankAccount } from '../modals/bank_account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private apiUrl = 'http://localhost:8080/bankAccounts'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(this.apiUrl);
  }

  getBankAccountById(id: number): Observable<BankAccount> {
    return this.http.get<BankAccount>(`${this.apiUrl}/${id}`);
  }

  createBankAccount(clientId: number, bankAccount: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.apiUrl}/client/${clientId}`, bankAccount);
  }

  updateBankAccount(id: number, bankAccountDetails: BankAccount): Observable<BankAccount> {
    return this.http.put<BankAccount>(`${this.apiUrl}/${id}`, bankAccountDetails);
  }

  deleteBankAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  findByTel(tel: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/find/${tel}`);
  }
}