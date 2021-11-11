import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';
//import { DataService } from '../services/data.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loggedIn: boolean = false;
  public role: string = "user";
  public showProfile: boolean = false;
  public showCrud: boolean = false;
  public searched: string = "";
  public catalog: string = "";
  public id: number = 0;
  public price: number = 0;
  public inStock: number = 0;
  public name: string = "";
  public manufacturer: string = "";
  public email: string = "";
  public password: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public address: string = "";
  public hide: boolean = true;
  public admin: Administrator = new Administrator("Popescu", "Ion", "Timisoara", "admin@gmail.com", "adminpass");
  public customers: Customer[] = [new Customer("Mihaescu", "Sorina", "Cluj", "customer@gmail.com", "customerpass")];
  public receivedAdmin: Administrator = new Administrator("", "", "", "", "");
  public receivedCustomer: Customer = new Customer("", "", "", "", "");

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    //private dataService: DataService,
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
    this.communicationService.currentAdmin.subscribe(adminData => this.receivedAdmin = adminData);
    this.communicationService.currentCustomer.subscribe(customerData => this.receivedCustomer = customerData);
    if(this.receivedAdmin.email != ""){
      this.role = "admin";
      this.loggedIn = true;
    }
    if(this.receivedCustomer.email != ""){
      this.role = "customer";
      this.loggedIn = true;
    }
    this.checkRole();
  }

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  checkRole(): void{
    if(this.role == "user"){
      this.showCrud = false;
      this.showProfile = false;
    }
    if(this.role == "customer"){
      this.showProfile = true;
      this.showCrud = false;
    }
    if(this.role == "admin"){
      this.showCrud = true;
      this.showProfile = true;
    }
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required]]
  })

  searchForm = this.formBuilder.group({
    searched: "",
  })

  deleteForm = this.formBuilder.group({
    id: 1,
  })

  addForm = this.formBuilder.group({
    id: 1,
    name: "",
    price: 0,
    inStock: 0,
    manufacturer: "",
  })

  updateForm = this.formBuilder.group({
    id: 1,
    name: "",
    price: 0,
    inStock: 0,
    manufacturer: "",
  })

  newAccountForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onDelete(): void{
    this.id = this.deleteForm.get('id')!.value;
  }

  onAdd(): void{
    this.id = this.deleteForm.get('id')!.value;
    this.name = this.addForm.get('name')!.value;
    this.price = this.addForm.get('price')!.value;
    this.inStock = this.addForm.get('inStock')!.value;
    this.manufacturer = this.addForm.get('manufacturer')!.value;
  }

  onUpdate(): void{
    this.id = this.deleteForm.get('id')!.value;
    this.name = this.addForm.get('name')!.value;
    this.price = this.addForm.get('price')!.value;
    this.inStock = this.addForm.get('inStock')!.value;
    this.manufacturer = this.addForm.get('manufacturer')!.value;
  }

  onCreate(){
    if (this.newAccountForm.invalid) {
      return;
    }
    this.email = this.newAccountForm.get('email')!.value;
    this.password = this.newAccountForm.get('password')!.value;
    this.firstName = this.newAccountForm.get('firstName')!.value;
    this.lastName = this.newAccountForm.get('lastName')!.value;
    this.address = this.newAccountForm.get('address')!.value;
    this.customers.push(new Customer(this.firstName, this.lastName, this.address, this.email, this.password));
  }

  onLogin(){
    if (this.loginForm.invalid) {
      return;
    }
    this.email = this.loginForm.get('email')!.value;
    this.password = this.loginForm.get('password')!.value;
    if(this.email == this.admin.email && this.password == this.admin.password){
      this.loggedIn = true;
      this.role = "admin";
      this.checkRole();
      this.communicationService.sendAdmin(this.admin);
      this.communicationService.sendCustomer(new Customer("", "", "", "", ""));
    }
    else{
      this.customers.forEach(customer => {
        if(this.email == customer.email && this.password == customer.password){
          this.loggedIn = true;
          this.role = "customer";
          this.checkRole();
          this.communicationService.sendCustomer(customer);
          this.communicationService.sendAdmin(new Administrator("", "", "", "", ""));
        }
      });
    }
  }

  get f() { 
    return this.newAccountForm.controls;
  }

  get g() { 
    return this.loginForm.controls;
  }

  onLogout(){
    this.loggedIn = false;
    this.role = "user";
    this.checkRole();
  }

  onSearch(): void{
    this.searched = this.searchForm.get('searched')!.value;
  }

  onImbracaminte(){
    this.catalog = "imbracaminte";
  }

  onJucarii(){
    this.catalog = "jucarii";
  }

  onEchipamente(){
    this.catalog = "echipamente";
  }

  onCarti(){
    this.catalog = "carti";
  }

  onGaming(){
    this.catalog = "gaming";
  }

  onTelefoane(){
    this.catalog = "telefoane";
  }

  onLaptopuri(){
    this.catalog = "laptopuri";
  }

}
