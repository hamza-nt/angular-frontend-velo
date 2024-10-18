import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/api/customers'; // Changez cette URL selon votre configuration

  constructor(private http: HttpClient) { }

  // Déclarez le type de retour ici
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl); // Utilisation de HttpClient pour faire la requête GET
  }
}
