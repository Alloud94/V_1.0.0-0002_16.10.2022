import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KUnternehmenComponent } from './k-unternehmen.component';

describe('KUnternehmenComponent', () => {
  let component: KUnternehmenComponent;
  let fixture: ComponentFixture<KUnternehmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KUnternehmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KUnternehmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
