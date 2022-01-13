import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from './credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  private backendURLGetDetails = "http://localhost:8080/v1/fetch";
  private backendURLSetDEtails ="http://localhost:8080/v1/save";
  
  constructor(private http : HttpClient) {  
  }
  getCreditInformation() : Observable<Credit[]>{
    return this.http.get<Credit[]>(`${this.backendURLGetDetails}`);
  }
  storeCreditInformation(credit: Credit) :Observable<Object>{
    return this.http.post(`${this.backendURLSetDEtails}`, credit);
  } 
}
