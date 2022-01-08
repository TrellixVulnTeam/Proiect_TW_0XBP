import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';
import { DataService } from '../services/data.service';
import { CommunicationService } from '../services/communication.service';
import { Item } from '../classes/item';
import { Md5 } from 'ts-md5';

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
  public type: string = "";
  public price: number = 0;
  public inStock: number = 0;
  public name: string = "";
  public manufacturer: string = "";
  public url: string = "";
  public email: string = "";
  public password: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public username: string = '';
  public address: string = "";
  public city: string = "";
  public country: string = "";
  public zipcode: number = 0;
  public hide: boolean = true;
  public admin: Administrator[] = [new Administrator(1, "Popescu", "Ion", "PopescuIon23", "admin@gmail.com", "adminpass", "Strada 1", "Timisoara", "Romania", 30166, "0721001000", "0256100100")];
  public customers: Customer[] = [new Customer(1, "Mihaescu", "Sorina", "Sorina00", "customer@gmail.com", "customerpass", "Strada 2", "Cluj", "Romania", 400058)];
  public receivedAdmin: Administrator = new Administrator(0, "", "", "", "", "", "", "", "", 0, "", "");
  public receivedCustomer: Customer = new Customer(0, "", "", "", "", "", "", "", "", 0);
  public cartItems: Item[] = [];
  public suma: number = 0;
  public images: string[] = ['../assets/1.jpg', '../assets/2.jpg'];
  public filter: number = 0;
  public items: Item[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private communicationService: CommunicationService,
    private dataService: DataService
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
    this.getItems();
    this.dataService.getAdmins().subscribe(
      (response: Administrator[]) => {
        this.admin = response;
      }
    );
    this.dataService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      }
    )
  }

  getItems(){
    this.dataService.getItems().subscribe(
      (response: Item[]) => {
        this.items = response;
      }
    );
  }

  loadData(){
    this.getItems();
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
    name: ['', Validators.required],
    price: ['0', Validators.required],
    inStock: ['0', Validators.required],
    manufacturer: ['', Validators.required],
  })

  updateForm = this.formBuilder.group({
    id: ['1', Validators.required],
    name: ['', Validators.required],
    price: ['0', Validators.required],
    inStock: ['0', Validators.required],
    manufacturer: ['', Validators.required]
  })

  newAccountForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    zipcode: ['', Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  addressForm = this.formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    zipcode: ['', Validators.required]
  })

  onLoad(){
    this.loadData();
  }

  onDelete(): void{
    this.id = this.deleteForm.get('id')!.value;
    this.dataService.deleteItem(this.id).subscribe();
    this.getItems();
  }

  onAdd(): void{
    if (this.addForm.invalid) {
      return;
    }
    this.name = this.addForm.get('name')!.value;
    this.price = this.addForm.get('price')!.value;
    this.inStock = this.addForm.get('inStock')!.value;
    this.manufacturer = this.addForm.get('manufacturer')!.value;
    this.dataService.addItem(new Item(0, this.type, this.name, this.price, this.inStock, this.manufacturer, this.url)).subscribe();
    this.getItems();
  }

  onUpdate(): void{
    if (this.updateForm.invalid) {
      return;
    }
    this.id = this.updateForm.get('id')!.value;
    this.name = this.updateForm.get('name')!.value;
    this.price = this.updateForm.get('price')!.value;
    this.inStock = this.updateForm.get('inStock')!.value;
    this.manufacturer = this.updateForm.get('manufacturer')!.value;
    this.dataService.updateItem(this.id, new Item(this.id, this.type, this.name, this.price, this.inStock, this.manufacturer, this.url)).subscribe();
    this.getItems();
  }

  onCreate(){
    if (this.newAccountForm.invalid) {
      return;
    }
    this.email = this.newAccountForm.get('email')!.value;
    this.password = Md5.hashStr(this.newAccountForm.get('password')!.value);
    this.firstName = this.newAccountForm.get('firstName')!.value;
    this.lastName = this.newAccountForm.get('lastName')!.value;
    this.username = this.newAccountForm.get('username')!.value;
    this.address = this.newAccountForm.get('address')!.value;
    this.city = this.newAccountForm.get('city')!.value;
    this.country = this.newAccountForm.get('country')!.value;
    this.zipcode = this.newAccountForm.get('zipcode')!.value;
    var newCustomer = new Customer(0, this.firstName, this.lastName, this.username, this.email, this.password, this.address, this.city, this.country, this.zipcode);
    this.customers.push(newCustomer);
    this.dataService.addCustomer(newCustomer).subscribe();
  }

  onLogin(){
    if (this.loginForm.invalid) {
      return;
    }
    this.email = this.loginForm.get('email')!.value;
    this.password = this.loginForm.get('password')!.value;
    this.admin.forEach(administrator => {
      if(this.email == administrator.email && Md5.hashStr(this.password) == administrator.password){
        this.loggedIn = true;
        this.role = "admin";
        this.checkRole();
        this.communicationService.sendAdmin(administrator);
        this.communicationService.sendCustomer(new Customer(0, "", "", "", "", "", "", "", "", 0));
      }
    });
    this.customers.forEach(customer => {
      if(this.email == customer.email && Md5.hashStr(this.password) == customer.password){
        this.loggedIn = true;
        this.role = "customer";
        this.checkRole();
        this.communicationService.sendCustomer(customer);
        this.communicationService.sendAdmin(new Administrator(0, "", "", "", "", "", "", "", "", 0, "", ""));
      }
    });
  }

  onBuy(element: Item){
    this.cartItems.push(element);
  }

  get newaccountCheck() { 
    return this.newAccountForm.controls;
  }

  get loginCheck() { 
    return this.loginForm.controls;
  }

  get addressCheck() { 
    return this.addressForm.controls;
  }

  get addCheck() { 
    return this.addForm.controls;
  }

  get updateCheck() { 
    return this.updateForm.controls;
  }

  onLogout(){
    this.loggedIn = false;
    this.role = "user";
    this.checkRole();
  }

  onSearch(): void{
    this.searched = this.searchForm.get('searched')!.value;
  }

  onToate(){
    this.catalog = '';
  }

  onImbracaminte(){
    this.catalog = "Imbracaminte";
  }

  onJucarii(){
    this.catalog = "Jucarii";
  }

  onCosmetice(){
    this.catalog = "Cosmetice";
  }

  onCarti(){
    this.catalog = "Carti";
  }

  onGaming(){
    this.catalog = "Gaming";
  }

  onTelefoane(){
    this.catalog = "Telefoane";
  }

  onLaptopuri(){
    this.catalog = "Laptopuri";
  }

  calculateTotal(): void{
    this.cartItems.forEach(item => {
      this.suma = this.suma +  item.price;
    })
    
  }

  resetTotal(): void{
    this.suma = 0;
  }

  resetCart(): void{
    this.cartItems = [];
  }

  removeCartItem(item: Item): void{
    this.cartItems.forEach((i, index) => {
      if(i == item){
        this.cartItems.splice(index, 1);
      }
    })
  }

  valueChanged(event: any) {
    this.filter = event.value;
  }

  selectedType(event: MatSelectChange){
    this.type = event.value;
  }

  selectedUrl(event: MatSelectChange){
    this.url = event.value;
  }

}
