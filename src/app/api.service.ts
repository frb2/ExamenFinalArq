import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:9000';
  constructor(private httpClient: HttpClient) { }
  getReporte(){
    return this.httpClient.get(`${this.API_URL}/listar `);
  }
}
