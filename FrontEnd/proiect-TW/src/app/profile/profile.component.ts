import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
import { Item } from '../classes/item';
 
 
@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 public loggedIn: boolean = false;
 // public showProfile: boolean = false;
 // public showCrud: boolean = false;
 public id: number = 0;
 // public catalog: string = "";
 
 public email: string = "";
 // public password: string = "";
 public firstName: string = "";
 public lastName: string = "";
 public username: string = "";
 public address: string = "";
 public city: string = "";
 public country: string = "";
 public zipcode: number = 0;
 public admin: Administrator = new Administrator(0, "", "", "", "", "", "", "", "", 0, "", "");
 public customer: Customer = new Customer(0, "", "", "", "", "", "", "", "", 0);
 // deleteForm: any;
 
 // public items: Item[] = [new Item(1, "Tablou", 100, 70, "H"), new Item(2, "Tabla de sah", 60,10, "HyperX"), new Item(3, "Urs de plus", 40, 20, "Choco")];
 // public suma: number = 0;
 
 // public inStock: number = 0;
 // public name: string = "";
 // public manufacturer: string = "";
 // public price: number = 0;
 
 
 
 constructor(
   private formBuilder: FormBuilder,
   private modalService: NgbModal,
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
 
 onSave(){
   this.communicationService.sendCustomer(this.customer);
 }
 
 
 
 // newProfileForm = this.formBuilder.group({
 //   firstName: ['', Validators.required],
 //   lastName: ['', Validators.required],
 //   address: ['', Validators.required],
 //   email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  
 // })
 
//   addressForm = this.formBuilder.group({
//     address: ['', Validators.required]
//   })
//   get addressCheck() {
//     return this.addressForm.controls;
//   }
//  nameUser(){
//     return this.admin.firstName;
 
//   }
 onCard(){
 
 }
 
 onLogout(){
   this.loggedIn = false;
  
 }
 // onDelete(): void{
 //   this.id = this.deleteForm.get('id')!.value;
 // }
 
 
 
 // removeCartItem(item: Item): void{
 //   this.items.forEach((i, index) => {
 //     if(i == item){
 //       this.items.splice(index, 1);
 //     }
 //   })
 // }
 
 
 // addForm = this.formBuilder.group({
 //   id: 1,
 //   name: "",
 //   price: 0,
 //   inStock: 0,
 //   manufacturer: "",
 // })
 
 
}
