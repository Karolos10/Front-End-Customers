import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {

    this.listCustomers();
  }

  listCustomers() {
    this.customerService.getCustomerList().subscribe(

      data => {
        this.customers = data,
        console.log(this.customers);
      }
    );
  }

  deleteCustomer(id: number) {

    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      () => this.listCustomers()
    );

  }


}
