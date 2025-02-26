import { TestBed } from '@angular/core/testing';

import { LoanRequestService } from './loan-request.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoanRequestService', () => {
  let service: LoanRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(LoanRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
