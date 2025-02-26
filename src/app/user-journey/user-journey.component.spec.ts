import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserJourneyComponent } from './user-journey.component';
import { LoanRequestService } from '../core/services/loan-request.service';
import { of } from 'rxjs';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { CommonModule } from '@angular/common';

describe('UserJourneyComponent', () => {
  let component: UserJourneyComponent;
  let fixture: ComponentFixture<UserJourneyComponent>;
  let loanRequestService: LoanRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, UserDetailsComponent, LoanDetailsComponent],
      providers: [
        {
          provide: LoanRequestService,
          useValue: {
            submitLoanRequest: jasmine.createSpy('submitLoanRequest').and.returnValue(of({ data: { lender_details_and_pricing: [{'id': 1}] } })),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJourneyComponent);
    component = fixture.componentInstance;
    loanRequestService = TestBed.inject(LoanRequestService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial step as "user"', () => {
    expect(component.step).toBe('user');
  });

  it('should call submitLoanRequest and update lender_details_and_pricing on submit', () => {
    component.submit();
    expect(loanRequestService.submitLoanRequest).toHaveBeenCalledWith(component.loanRequest);
    component.submit();
    component.submit();
    fixture.detectChanges(); // Detect changes after submit

    expect(component.lender_details_and_pricing).toEqual([{'id': 1}]);
  });

  it('should change step to "loan-detail" on next call', () => {
    component.next();
    expect(component.step).toBe('loan-detail');
  });
});
