import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loggedIn: boolean = false;
  public role: string = "user";
  public admin: boolean = false;
  public showProfile: boolean = false;
  public showCrud: boolean = false;
  public searched: string = "";
  public id: number = 0;
  public price: number = 0;
  public inStock: number = 0;
  public name: string = "";
  public manufacturer: string = "";
  public email: string = "";
  public password: string = "";
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    role: "user",
  })

  searchForm = this.formBuilder.group({
    searched: "",
  })

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  checkRole(): void{
    if(this.role == "user"){
      this.showCrud = false;
      this.showProfile = false;
      this.admin = false;
    }
    if(this.role == "optionCustomer"){
      this.showProfile = true;
    }
    if(this.role == "optionAdmin"){
      this.showCrud = true;
      this.showProfile = true;
      this.admin = true;
    }
  }

  selectedValue(event: MatSelectChange){
    this.loggedIn = true;
    this.role = event.value;
    this.checkRole();
  }

  onLogout(){
    this.loggedIn = false;
    this.role = "user";
    this.checkRole();
  }

  onSearch(): void{
    this.searched = this.searchForm.get('searched')!.value;
  }

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
    email: "",
    password: "",
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
    this.email = this.newAccountForm.get('email')!.value;
    this.password = this.newAccountForm.get('password')!.value;
  }

}
