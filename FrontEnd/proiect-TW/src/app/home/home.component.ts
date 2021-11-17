import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import { Administrator } from '../classes/administrator';
import { Customer } from '../classes/customer';
//import { DataService } from '../services/data.service';
import { CommunicationService } from '../services/communication.service';
import { Item } from '../classes/item';

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
  public admin: Administrator = new Administrator("Popescu", "Ion", "PopescuIon23", "admin@gmail.com", "adminpass", "Strada 1", "Timisoara", "Romania", 30166, "0721001000", "0256100100");
  public customers: Customer[] = [new Customer("Mihaescu", "Sorina", "Sorina00", "customer@gmail.com", "customerpass", "Strada 2", "Cluj", "Romania", 400058)];
  public receivedAdmin: Administrator = new Administrator("", "", "", "", "", "", "", "", 0, "", "");
  public receivedCustomer: Customer = new Customer("", "", "", "", "", "", "", "", 0);
  public cartItems: Item[] = [new Item(1, "Imbracaminte", "Bluza", 100, 30, "H&M", "/assets/bluzahm.png"), 
                        new Item(2, "Gaming", "Tastatura", 250,10, "HyperX", "/assets/hyperx.png"), 
                        new Item(3, "Carti", "Harry Potter", 40, 15, "Arthur", "/assets/harrypotter.jpeg")];
  public suma: number = 0;
  public images: string[] = ['../assets/1.jpg', '../assets/2.jpg'];
  public filter: number = 0;
  public items: Item[] = [new Item(1, "Imbracaminte", "Bluza", 100, 230, "H&M", "../assets/bluzahm.png"),
                        new Item(2, "Jucarii", "Puzzle", 15, 130, "D-Toysss", "../assets/puzzle.png"),
                        new Item(3, "Echipamente sportive", "Paleta tenis", 65, 130, "Sunflex", "../assets/paleta.png"),
                        new Item(4, "Carti", "Inferno", 25, 230, "DAO", "../assets/inferno.png"),
                        new Item(5, "Gaming", "Tastatura", 250,210, "HyperX", "../assets/hyperx.png"), 
                        new Item(6, "Carti", "Harry Potter", 40, 115, "Arthur", "../assets/harrypotter.jpeg"),
                        new Item(7, "Laptopuri", "VivoBook 15", 3300, 123, "Asus", "../assets/asus.png"),
                        new Item(8, "Telefoane", "Galaxy S21", 3000, 137, "Samsung", "../assets/samsung.png"),
                        new Item(9, "Gaming", "Casti", 200, 215, "Logitech", "../assets/logitech.png"),
                        new Item(10, "Imbracaminte", "Pantaloni", 90, 320, "Bershka", "../assets/pantaloni.png"),];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    //private dataService: DataService,
    private communicationService: CommunicationService,
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
    id: ['1', Validators.required],
    type: ['', Validators.required],
    name: ['', Validators.required],
    price: ['0', Validators.required],
    inStock: ['0', Validators.required],
    manufacturer: ['', Validators.required],
    url: ['', Validators.required]
  })

  updateForm = this.formBuilder.group({
    id: ['1', Validators.required],
    type: ['', Validators.required],
    name: ['', Validators.required],
    price: ['0', Validators.required],
    inStock: ['0', Validators.required],
    manufacturer: ['', Validators.required],
    url: ['', Validators.required]
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

  onDelete(): void{
    this.id = this.deleteForm.get('id')!.value;
    this.items.forEach((i, index) => {
      if(index == (this.id-1)){
        this.items.splice(index, 1);
      }
    })
  }

  onAdd(): void{
    if (this.addForm.invalid) {
      return;
    }
    this.id = this.addForm.get('id')!.value;
    this.type = this.addForm.get('type')!.value;
    this.name = this.addForm.get('name')!.value;
    this.price = this.addForm.get('price')!.value;
    this.inStock = this.addForm.get('inStock')!.value;
    this.manufacturer = this.addForm.get('manufacturer')!.value;
    this.url = this.addForm.get('url')!.value;
    this.items.push(new Item(this. id, this.type, this.name, this.price, this.inStock, this.manufacturer, this.url));
  }

  onUpdate(): void{
    if (this.updateForm.invalid) {
      return;
    }
    this.id = this.updateForm.get('id')!.value;
    this.type = this.updateForm.get('type')!.value;
    this.name = this.updateForm.get('name')!.value;
    this.price = this.updateForm.get('price')!.value;
    this.inStock = this.updateForm.get('inStock')!.value;
    this.manufacturer = this.updateForm.get('manufacturer')!.value;
    this.url = this.updateForm.get('url')!.value;
    this.items.forEach((i, index) => {
      if(index == (this.id-1)){
        this.items[this.id-1] = new Item(this. id, this.type, this.name, this.price, this.inStock, this.manufacturer, this.url);
      }
    })
  }

  onCreate(){
    if (this.newAccountForm.invalid) {
      return;
    }
    this.email = this.newAccountForm.get('email')!.value;
    this.password = this.newAccountForm.get('password')!.value;
    this.firstName = this.newAccountForm.get('firstName')!.value;
    this.lastName = this.newAccountForm.get('lastName')!.value;
    this.username = this.newAccountForm.get('username')!.value;
    this.address = this.newAccountForm.get('address')!.value;
    this.city = this.newAccountForm.get('city')!.value;
    this.country = this.newAccountForm.get('country')!.value;
    this.zipcode = this.newAccountForm.get('zipcode')!.value;
    this.customers.push(new Customer(this.firstName, this.lastName, this.username, this.email, this.password, this.address, this.city, this.country, this.zipcode));
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
      this.communicationService.sendCustomer(new Customer("", "", "", "", "", "", "", "", 0));
    }
    else{
      this.customers.forEach(customer => {
        if(this.email == customer.email && this.password == customer.password){
          this.loggedIn = true;
          this.role = "customer";
          this.checkRole();
          this.communicationService.sendCustomer(customer);
          this.communicationService.sendAdmin(new Administrator("", "", "", "", "", "", "", "", 0, "", ""));
        }
      });
    }
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

}
