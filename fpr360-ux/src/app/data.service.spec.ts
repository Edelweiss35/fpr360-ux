import { TestBed, inject } from '@angular/core/testing';

import { CompanyListService } from './data.service';

describe('CompanyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyListService]
    });
  });

  it('should be created', inject([CompanyListService], (service: CompanyListService) => {
    expect(service).toBeTruthy();
  }));
});
