import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../modals/client';
import { Agent } from '../modals/agent';
// Replace with the path to your Agent model

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'http://localhost:8080/api/agent'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-client`, client);
  }
  sendPostRequest(client: Client): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/sendPostRequest`, client);
  }

  deleteClient(client: Client): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/delete-client`, client);
  }

  agentInfosVerification(username: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/authenticate?username=${username}&password=${password}`);
  }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.apiUrl}/list-agents`);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/list-clients`);
  }
  change_password(email: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/changePassword?email=${email}&password=${password}`,{})
  }
}