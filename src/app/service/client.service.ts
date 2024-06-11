import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../modals/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8081/api/client'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  senderCode(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/SendVerificationCode`, client);
  }

  validationCode(client: Client, code: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/ValidationCode?code=${code}`, client);
  }

  sendEmail(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/SendEmail`, {});
  }
  getTel(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getTel/${id}`,{responseType: 'text'});
  }
  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/getClient/${id}`);
  }
  getIdByTel(tel: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getIdByTel/${tel}`);
  }
  update(client: Client): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, client);
  }
  getProfessionalClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/professional`);
  }

  getNonProfessionalClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/nonProfessional`);
  }
}
