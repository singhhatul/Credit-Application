import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditEligibilityComponent } from './credit-eligibility/credit-eligibility.component';
import { CreditEnquiryComponent } from './credit-enquiry/credit-enquiry.component';

const routes: Routes = [
  {path: 'credit-eligibility',component: CreditEligibilityComponent},
  {path: 'credit-enquiry',component: CreditEnquiryComponent},
  {path: '',redirectTo: 'credit-enquiry', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
