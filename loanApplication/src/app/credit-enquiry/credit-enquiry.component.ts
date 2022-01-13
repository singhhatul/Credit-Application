import { Component, OnInit } from '@angular/core';
import { Credit } from '../credit';
import { CreditService } from '../credit.service';
@Component({
  selector: 'app-credit-enquiry',
  templateUrl: './credit-enquiry.component.html',
  styleUrls: ['./credit-enquiry.component.css']
})
export class CreditEnquiryComponent implements OnInit {

  credits: Credit[] | undefined;

  constructor(private creditService : CreditService) { }

  ngOnInit(): void {
    this.getCreditList();
    
  }

  private getCreditList(){
    this.creditService.getCreditInformation().subscribe(data => {
      this.credits = data;
    })
  }
}
