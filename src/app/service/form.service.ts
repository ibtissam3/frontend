import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = '/forms'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getFormByDebtCode(debtCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${debtCode}`);
  }
}