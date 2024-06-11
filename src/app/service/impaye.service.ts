import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpayeService {
  private apiUrl = 'http://localhost:8080/impayes/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getImpayesByDebtCode(creance_id: number, client_id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/impayes?creance_id=${creance_id}&client_id=${client_id}`);
}

}