import { Component, OnInit } from '@angular/core';
import { Credit } from '../credit';
import { CreditService } from '../credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-eligibility',
  templateUrl: './credit-eligibility.component.html',
  styleUrls: ['./credit-eligibility.component.css']
})
export class CreditEligibilityComponent implements OnInit {
  
  credit: Credit = new Credit();
  constructor(private creditService : CreditService, 
    private router:Router) { }

  ngOnInit(): void {
  }

    storeCreditInformation(){
      this.creditService.storeCreditInformation(this.credit).subscribe( data => {
        console.log("SuccessFully fetched record");
      });
    }

    goToCreditList(){
      this.router.navigate(['/credit-enquiry']);
    }
  onSubmit(){
    console.log(this.credit);
    this.goToCreditList();
    this.storeCreditInformation();
  }
}
