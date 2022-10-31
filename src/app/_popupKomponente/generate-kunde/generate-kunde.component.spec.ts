import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateKundeComponent } from './generate-kunde.component';

describe('GenerateKundeComponent', () => {
  let component: GenerateKundeComponent;
  let fixture: ComponentFixture<GenerateKundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateKundeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateKundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
