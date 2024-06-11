import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementHomeComponent } from './paiement-home.component';

describe('PaiementHomeComponent', () => {
  let component: PaiementHomeComponent;
  let fixture: ComponentFixture<PaiementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
