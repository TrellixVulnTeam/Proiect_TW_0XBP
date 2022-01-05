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
  itemUrl = 'http://localhost:8080/item';
  customerUrl = 'http://localhost:8080/customer';
  adminUrl = 'http://localhost:8080/administrator';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  deleteItem(id: number): Observable<any>{
    const url = `${this.itemUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  addItem(item: Item): Observable<any>{
    return this.http.post<any>(this.itemUrl, item);
  }

  updateItem(id: number, item: Item): Observable<any>{
    const url = `${this.itemUrl}/${id}`;
    return this.http.put(url, item);
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getAdmins(): Observable<Administrator[]>{
    return this.http.get<Administrator[]>(this.adminUrl);
  }

  addCustomer(customer: Customer): Observable<any>{
    return this.http.post<any>(this.customerUrl, customer);
  }

  updateCustomer(id: number, account: Customer): Observable<any>{
    const url = `${this.customerUrl}/${id}`;
    return this.http.put(url, account);
  }

  updateAdministrator(id: number, account: Administrator): Observable<any>{
    const url = `${this.adminUrl}/${id}`;
    return this.http.put(url, account);
  }

}
