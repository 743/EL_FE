import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  employmentStatuses = ['Employed', 'Self-Employed', 'Unemployed'];

  @Input() user: any;

  @Output() next = new EventEmitter();

  isValid() {

    return this.user.firstName !== '' && this.user.lastName !== '' 
      && this.user.email !== '' && this.user.employmentStatus !== '' 
      && !(this.user.employmentStatus !== 'Unemployed' && this.user.employerName === '')

  }

  onNext() {
    if(this.user.employmentStatus === 'Unemployed') {
      this.user.employerName = '';
    }
    this.next.emit();
  }

}
