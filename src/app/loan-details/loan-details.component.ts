import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent {

  @Input() loanDetail: any;
  @Output() submit = new EventEmitter();
  
    isValid() {
      if(this.loanDetail.purpose === '' || Number.isNaN(this.loanDetail.vehiclePrice) || Number.isNaN(this.loanDetail.deposit) || Number.isNaN(this.loanDetail.term) ) {
          return false;
        }
        const vehiclePrice = Number(this.loanDetail.vehiclePrice), deposit = Number(this.loanDetail.deposit), term = Number(this.loanDetail.term)
        if (vehiclePrice < 2000 || deposit < 0 || ((vehiclePrice - deposit) < 2000)  || term < 1 || term > 7) {
          return false;
        }
        return true;
    }
  
    onSubmit() {
      this.submit.emit();
    }
}
