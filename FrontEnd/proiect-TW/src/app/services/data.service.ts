import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable , throwError } from "rxjs";
import { Item } from '../classes/item';
import { Customer } from '../classes/customer';
import { Administrator } from '../classes/administrator';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    const url = '${this.baseUrl}/customers';
    return this.http.get<Customer[]>(url);
  }

  getAdmins(): Observable<Administrator[]>{
    const url = '${this.baseUrl}/administrators';
    return this.http.get<Administrator[]>(url);
  }

  getItems(): Observable<Item[]>{
    const url = '${this.baseUrl}/items';
    return this.http.get<Item[]>(url);
  }

  deleteItem(id: number): Observable<any>{
    const url = '${this.baseUrl}/items/${id}';
    return this.http.delete<any>(url);
  }

  addItem(item: Item): Observable<any>{
    const url = '${this.baseUrl}/items';
    return this.http.post<any>(url, item);
  }

  updateItem(id: number, item: Item): Observable<any>{
    const url = '${this.baseUrl}/items/${id}';
    return this.http.put(url, item);
  }

  addCustomer(customer: Customer): Observable<any>{
    const url = '${this.baseUrl}/customers';
    return this.http.post<any>(url, customer);
  }

}
