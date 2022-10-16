import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HKundeComponent } from './h-kunde.component';

describe('HKundeComponent', () => {
  let component: HKundeComponent;
  let fixture: ComponentFixture<HKundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HKundeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HKundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
