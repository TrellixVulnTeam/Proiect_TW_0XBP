import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Md5 } from 'ts-md5';
import { DataService } from '../services/data.service';

 

@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 public loggedIn: boolean = false;

 public id: number = 0;
 public hide: boolean = true;

 public email: string = "";
 public password: string = "";
 public firstName: string = "";
 public landline:string ="";
 public mobile:string="";
 public lastName: string = "";
 public username: string = "";
 public address: string = "";
 public city: string = "";
 public country: string = "";
 public zipcode: number = 0;
 public admin: Administrator = new Administrator(0, "", "", "", "", "", "", "", "", 0, "", "");
 public customer: Customer = new Customer(0, "", "", "", "", "", "", "", "", 0);


 public updateForm: boolean = false;
public changePassword: boolean = false;
 
 constructor(
   private formBuilder: FormBuilder,
   private modalService: NgbModal,
   private communicationService: CommunicationService,
   private dataService: DataService
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

 onCard(){
 
 }
 
 onLogout(){
   this.loggedIn = false;
  
 }

 onAccountUpdate(){
  this.updateForm = true;
}
onChangePassword(){
  this.changePassword = true;
}
updateAccountForm = this.formBuilder.group({
  email: ['', [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  firstName: '',
  lastName: '',
  mobile: '',
  landline:'',
  address:'',
  city:'',
  country:'',
  zipcode:'',
  username:'',

})

changePasswordForm = this.formBuilder.group({
  password: ['', [Validators.required, Validators.minLength(6)]],
})
get updateAccountCheck() { 
  return this.updateAccountForm.controls;
}

get passwordCheck() { 
  return this.changePasswordForm.controls;
}




onSaveAccountUpdate(){
  this.updateForm = false;
  this.changePassword = false;
  if(this.admin.landline!=''){
  if(this.updateAccountForm.get('email')!.value != "")
    this.email = this.updateAccountForm.get('email')!.value;
  else
    this.email = this.admin.email;
  if(this.updateAccountForm.get('firstName')!.value != "")
    this.firstName = this.updateAccountForm.get('firstName')!.value;
  else
    this.firstName = this.admin.firstName;
    

    if(this.updateAccountForm.get('address')!.value != "")
    this.address = this.updateAccountForm.get('address')!.value;
  else
    this.address = this.admin.address;

    if(this.updateAccountForm.get('username')!.value != "")
    this.username = this.updateAccountForm.get('username')!.value;
  else
    this.username = this.admin.username;

  if(this.updateAccountForm.get('lastName')!.value != "")
    this.lastName = this.updateAccountForm.get('lastName')!.value;
  else
    this.lastName = this.admin.lastName;
  if(this.updateAccountForm.get('mobile')!.value != "")
    this.mobile = this.updateAccountForm.get('mobile')!.value;
  else
    this.mobile = this.admin.mobile;
    if(this.updateAccountForm.get('landline')!.value != "")
    this.landline = this.updateAccountForm.get('landline')!.value;
  else
    this.landline = this.admin.landline;
    if(this.updateAccountForm.get('city')!.value != "")
    this.city = this.updateAccountForm.get('city')!.value;
  else
    this.city = this.admin.city;

    if(this.updateAccountForm.get('country')!.value != "")
    this.country = this.updateAccountForm.get('country')!.value;
  else
    this.country= this.admin.country;

    if(this.updateAccountForm.get('zipcode')!.value != "")
    this.zipcode = this.updateAccountForm.get('zipcode')!.value;
  else
    this.zipcode = this.admin.zipcode;

  if(this.changePasswordForm.get('password')!.value != ""){
    this.password = this.changePasswordForm.get('password')!.value;
    this.password = Md5.hashStr(this.password);
  }
  else 
    this.password = this.admin.password;

    this.admin = new Administrator(this.admin.id,this.firstName, this.lastName, this.username, this.email, 
      this.password, this.address, this.city,this.country,this.zipcode,this.mobile,this.landline);
    this.dataService.updateAdministrator(this.admin.id, this.admin).subscribe();
}
else
{if(this.updateAccountForm.get('email')!.value != "")
this.email = this.updateAccountForm.get('email')!.value;
else
this.email = this.customer.email;
if(this.updateAccountForm.get('firstName')!.value != "")
this.firstName = this.updateAccountForm.get('firstName')!.value;
else
this.firstName = this.customer.firstName;

if(this.updateAccountForm.get('address')!.value != "")
this.address = this.updateAccountForm.get('address')!.value;
else
this.address = this.customer.address;

if(this.updateAccountForm.get('username')!.value != "")
this.username = this.updateAccountForm.get('username')!.value;
else
this.username = this.customer.username;

if(this.updateAccountForm.get('lastName')!.value != "")
this.lastName = this.updateAccountForm.get('lastName')!.value;
else
this.lastName = this.customer.lastName;

if(this.updateAccountForm.get('city')!.value != "")
this.city = this.updateAccountForm.get('city')!.value;
else
this.city = this.customer.city;

if(this.updateAccountForm.get('country')!.value != "")
this.country = this.updateAccountForm.get('country')!.value;
else
this.country= this.customer.country;

if(this.updateAccountForm.get('zipcode')!.value != "")
this.zipcode = this.updateAccountForm.get('zipcode')!.value;
else
this.zipcode = this.customer.zipcode;

if(this.changePasswordForm.get('password')!.value != ""){
this.password = this.changePasswordForm.get('password')!.value;
this.password = Md5.hashStr(this.password);
}
else 
this.password = this.customer.password;

this.customer = new Customer(this.customer.id,this.firstName, this.lastName, this.username, this.email, 
  this.password, this.address, this.city,this.country,this.zipcode);
this.dataService.updateCustomer(this.customer.id, this.customer).subscribe();

}

}

triggerModal(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
}
 
}