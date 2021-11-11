import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public admin: Administrator = new Administrator("", "", "", "", "");
  public customer: Customer = new Customer("", "", "", "", "");

  constructor(
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
    this.communicationService.currentAdmin.subscribe(adminData => this.admin = adminData);
    this.communicationService.currentCustomer.subscribe(customerData => this.customer = customerData);
  }

  onBack(){
    this.communicationService.sendAdmin(this.admin);
    this.communicationService.sendCustomer(this.customer);
  }

}
