import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../classes/customer';
import { Administrator } from '../classes/administrator';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public sourceCustomer = new BehaviorSubject<Customer>(new Customer("", "", "", "", ""));
  public currentCustomer = this.sourceCustomer.asObservable();
  public sourceAdmin = new BehaviorSubject<Administrator>(new Administrator("", "", "", "", ""));
  public currentAdmin = this.sourceAdmin.asObservable();

  constructor() { }

  sendCustomer(data: Customer){
    this.sourceCustomer.next(data);
  }

  sendAdmin(data: Administrator){
    this.sourceAdmin.next(data);
  }
}
