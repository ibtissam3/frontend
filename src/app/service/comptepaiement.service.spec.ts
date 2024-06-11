import { TestBed } from '@angular/core/testing';

import { ComptepaiementService } from './comptepaiement.service';

describe('ComptepaiementService', () => {
  let service: ComptepaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptepaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
