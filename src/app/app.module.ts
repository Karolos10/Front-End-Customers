import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './componetns/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './componetns/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerListComponent]
})
export class AppModule { }
