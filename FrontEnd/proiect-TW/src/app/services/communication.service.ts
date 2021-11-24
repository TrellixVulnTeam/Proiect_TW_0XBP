import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../classes/customer';
import { Administrator } from '../classes/administrator';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public sourceCustomer = new BehaviorSubject<Customer>(new Customer(0, "", "", "", "", "", "", "", "", 0));
  public currentCustomer = this.sourceCustomer.asObservable();
  public sourceAdmin = new BehaviorSubject<Administrator>(new Administrator(0, "", "", "", "", "", "", "", "", 0, "", ""));
  public currentAdmin = this.sourceAdmin.asObservable();

  constructor() { }

  sendCustomer(data: Customer){
    this.sourceCustomer.next(data);
  }

  sendAdmin(data: Administrator){
    this.sourceAdmin.next(data);
  }
}
