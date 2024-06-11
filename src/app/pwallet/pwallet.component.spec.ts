import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwalletComponent } from './pwallet.component';

describe('PwalletComponent', () => {
  let component: PwalletComponent;
  let fixture: ComponentFixture<PwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
