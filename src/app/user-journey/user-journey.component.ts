import { Component } from '@angular/core';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { LoanDetailsComponent } from "../loan-details/loan-details.component";
import { LoanRequestService } from '../core/services/loan-request.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'user-journey',
  imports: [CommonModule, UserDetailsComponent, LoanDetailsComponent],
  templateUrl: './user-journey.component.html',
  styleUrl: './user-journey.component.css'
})
export class UserJourneyComponent {

  constructor(private loanRequestService: LoanRequestService) {}
  step = "user";

  lender_details_and_pricing: any;
  
  loanRequest = {'user': 
      {'firstName': '', 'lastName': '','email': '', 'employmentStatus': '', 'employerName': ''}, 
    'loanDetail': 
      {'vehiclePrice': '', 'deposit': '', 'purpose': '', 'term': ''}}

  submit() {
    console.log("submitted");
    this.loanRequestService.submitLoanRequest(this.loanRequest).subscribe(res => {
      this.lender_details_and_pricing = res.data.lender_details_and_pricing;
    });
  };

  next() {
    this.step = "loan-detail";
  }
}
