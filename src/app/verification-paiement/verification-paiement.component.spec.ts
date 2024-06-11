import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPaiementComponent } from './verification-paiement.component';

describe('VerificationPaiementComponent', () => {
  let component: VerificationPaiementComponent;
  let fixture: ComponentFixture<VerificationPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
