import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseUrl = 'http://localhost:8080/api/facture';

  constructor(private http: HttpClient) { }

  getDonationById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getDonation/${id}`);
  }

  getRechargeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getRecharge/${id}`);
  }

  getImpayeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getImpaye/${id}`);
  }

  getFactureById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}