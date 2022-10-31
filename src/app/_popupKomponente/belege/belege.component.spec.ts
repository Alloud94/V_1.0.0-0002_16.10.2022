import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelegeComponent } from './belege.component';

describe('BelegeComponent', () => {
  let component: BelegeComponent;
  let fixture: ComponentFixture<BelegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
