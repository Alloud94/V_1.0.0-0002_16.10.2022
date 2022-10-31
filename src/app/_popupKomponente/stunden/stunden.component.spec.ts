import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StundenComponent } from './stunden.component';

describe('StundenComponent', () => {
  let component: StundenComponent;
  let fixture: ComponentFixture<StundenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StundenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
