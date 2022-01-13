import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditEnquiryComponent } from './credit-enquiry/credit-enquiry.component';
import { CreditEligibilityComponent } from './credit-eligibility/credit-eligibility.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditEnquiryComponent,
    CreditEligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
