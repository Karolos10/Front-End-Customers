import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit{
  id : number =0;
  firstName : string = '';
  lastName : string = '';
  email : string = '';

  constructor(private customerService : CustomerService){

  }

  ngOnInit(): void {
  }

  addCustomer(){
    let customer = new Customer(this.id, this.firstName, this.lastName, this.email);

    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(res)
    );
  }

}
