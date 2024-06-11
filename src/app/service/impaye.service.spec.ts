import { TestBed } from '@angular/core/testing';

import { ImpayeService } from './impaye.service';

describe('ImpayeService', () => {
  let service: ImpayeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpayeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
