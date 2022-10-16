import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GKundenComponent } from './g-kunden.component';

describe('GKundenComponent', () => {
  let component: GKundenComponent;
  let fixture: ComponentFixture<GKundenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GKundenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GKundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
