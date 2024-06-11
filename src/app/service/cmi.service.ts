import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creancier } from '../modals/creancier';
import { Form } from '@angular/forms';
import { Impaye } from '../modals/impaye';


@Injectable({
  providedIn: 'root'
})
export class CmiService {
  private apiUrl = 'http://localhost:8080/cmi'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllCreanciers(): Observable<Creancier[]> {
    return this.http.get<Creancier[]>(`${this.apiUrl}/creanciers`);
  }

  getFormByCreanceId(creanceId: number): Observable<Form> {
    return this.http.get<Form>(`${this.apiUrl}/forms/${creanceId}`);
  }

  getCreancierByCode(code: number): Observable<Creancier> {
    return this.http.get<Creancier>(`${this.apiUrl}/${code}`);
  }

  getImpayesByCreanceId(creanceId: number): Observable<Impaye[]> {
    return this.http.get<Impaye[]>(`${this.apiUrl}/impayes/${creanceId}`);
  }

  confirmePayer(impayeId: number, phoneNumber: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/confirmePayer?impayeId=${impayeId}&phoneNumber=${phoneNumber}`, {});
  }

  associateAccount(clientId: number, accountNumber: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verifyAndAssociateBankAccount/${clientId}/${accountNumber}`, {});
  }
}