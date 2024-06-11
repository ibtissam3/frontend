import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementRecapitulatifComponent } from './paiement-recapitulatif.component';

describe('PaiementRecapitulatifComponent', () => {
  let component: PaiementRecapitulatifComponent;
  let fixture: ComponentFixture<PaiementRecapitulatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementRecapitulatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
